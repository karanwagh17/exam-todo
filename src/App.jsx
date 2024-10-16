import React, { useState, useEffect } from 'react';
import ToDoList from './ToDoList';

function App() {

  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');





  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

 
  const addTask = () => {
    if (taskInput.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskInput,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput(''); 
    }
  };


  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };


  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ToDoList tasks={tasks} onToggleTask={toggleTaskCompletion} onRemoveTask={removeTask} />
    </div>
  );
};

export default App;
