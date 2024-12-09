const express = require('express');
const app = express();
let tasks = [];

app.use(express.json());

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (title) {
    const newTask = { id: tasks.length + 1, title, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
  } else {
    res.status(400).json({ message: 'Title is required' });
  }
});

// Toggle task completion
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id === parseInt(id));
  if (task) {
    task.completed = !task.completed;
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
