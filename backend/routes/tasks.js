
const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const auth = require('../middleware/auth');

// Get all tasks
router.get('/', auth, getTasks);

// Create a new task
router.post('/', auth, createTask);

// Update a task
router.put('/:id', auth, updateTask);

// Delete a task
router.delete('/:id', auth, deleteTask);

module.exports = router;
