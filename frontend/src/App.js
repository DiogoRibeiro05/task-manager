import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { title: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{ textDecoration: t.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTask(index)}
          >
            {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
