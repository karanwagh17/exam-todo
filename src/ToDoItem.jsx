import React from 'react';

const ToDoItem = ({ task, onToggleTask, onRemoveTask }) => {
  return (
    <li style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggleTask(task.id)}
      />
      {task.text}
      <button onClick={() => onRemoveTask(task.id)}>Remove</button>
    </li>
  );
};

export default ToDoItem;