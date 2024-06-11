
const Task = require('../models/Task');

// Get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id }).sort({ deadline: 1 });
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new task
const createTask = async (req, res) => {
    const { title, description, deadline, priority } = req.body;

    try {
        const newTask = new Task({
            title,
            description,
            deadline,
            priority,
            user: req.user.id
        });

        const task = await newTask.save();
        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a task
const updateTask = async (req, res) => {
    const { title, description, deadline, priority, status } = req.body;
    const taskId = req.params.id;

    try {
        let task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        // Check if user owns the task
        if (task.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        // Update fields only if they are provided in the request body
        if (title) task.title = title;
        if (description) task.description = description;
        if (deadline) task.deadline = deadline;
        if (priority) task.priority = priority;
        if (status) task.status = status;

        await task.save();
        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};



// Delete a task
const deleteTask = async (req, res) => {
    try {
        // Find the task by ID
        let task = await Task.findById(req.params.id);

        // Check if the task exists
        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        // Check if the user owns the task
        if (task.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        // Delete the task
        await Task.deleteOne({ _id: req.params.id });
        res.json({ msg: 'Task removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = deleteTask;


module.exports = { getTasks, createTask, updateTask, deleteTask };

