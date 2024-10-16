import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, onToggleTask, onRemoveTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onRemoveTask={onRemoveTask}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
