import './App.css';
import React, { useState } from 'react';

function App() {
  const initialTasks = [
    {
      id: 1,
      checked: false,
      taskName: 'Study and review Javascript DOM',
      remarks: 'Very Easy'
    },
    {
      id: 2,
      checked: false,
      taskName: 'Study react router',
      remarks: 'A bit challenging but fun'
    },
    {
      id: 3,
      checked: false,
      taskName: 'Disect and Javascript Data Structure and Algorithm',
      remarks: 'It was challenging at first'
    }
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = event => {
    setNewTask(event.target.value);
  };

  const handleAddTask = event => {
    event.preventDefault();
    const newId = tasks.length + 1;
    const newTaskObj = {
      id: newId,
      checked: false,
      taskName: newTask,
      remarks: ''
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  const handleDeleteTask = taskToDelete => {
    const updatedTasks = tasks.filter(task => task.id !== taskToDelete.id);
    setTasks(updatedTasks);
  };

  const handleCheckTask = taskToCheck => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskToCheck.id) {
        return {
          ...task,
          checked: !task.checked
        };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <label>
          New Task:
          <input type="text" value={newTask} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => handleCheckTask(task)}
            />
            {task.taskName} - {task.remarks}
            <button onClick={() => handleDeleteTask(task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
