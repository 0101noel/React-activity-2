import React from 'react';

function TaskList({ tasks, onDelete, onToggle }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.checked}
            onChange={() => onToggle(task)}
          />
          {task.taskName} - {task.remarks}
          <button onClick={() => onDelete(task)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
