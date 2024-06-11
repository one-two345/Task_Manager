# Task_Manager
# Task Management Application

This is a task management application built with React, Redux, and Node.js. It allows users to register, log in, and manage their tasks. Users can add, update, delete, filter, and sort tasks based on different criteria.

## Features

- User Authentication
  - Register
  - Login
  - Logout

- Task Management
  - Add tasks
  - Edit tasks
  - Delete tasks
  - Mark tasks as pending or completed
  - Filter tasks by status (all, pending, completed)
  - Sort tasks by priority or deadline

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/one-two345/Task-Manager.git
   cd task-management-app
   ```

2. Install the dependencies for both the client and server:

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd frontend
   npm install
   ```

### Configuration

1. Create a `.env` file in the `server` directory and add the following environment variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```


### Running the Application

1. Start the server:

   ```bash
   cd backend
   npm start
   ```

2. Start the client:

   ```bash
   cd frontend
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Project Structure

- `backend/` - Node.js backend
  - `models/` - Mongoose models
  - 'controllers/'- controllers
  - `routes/` - Express routes
  - `middleware/` - Authentication middleware
  - `server.js` - Entry point for the server

- `frontend/` - React frontend
  - `src/`
    - `components/` - React components
      - `auth/` - Authentication components (Login, Register, Logout)
      - `tasks/` - Task management components (TaskList, TaskItem, TaskForm)
    - `actions/` - Redux action creators
    - `reducers/` - Redux reducers
    - `store.js` - Redux store configuration
    - `App.js` - Main App component
    - `index.js` - Entry point for the React application

## Usage

### Authentication

- Register a new account.
- Log in with your credentials.
- Log out when you are done.

### Task Management

- Add a new task with a title, description, deadline, priority, and status.
- Edit an existing task.
- Delete a task.
- Filter tasks by status (all, pending, completed).
- Sort tasks by priority or deadline.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

Feel free to customize this README file according to your project's specific details and requirements.
