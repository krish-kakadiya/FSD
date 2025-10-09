import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul>
        {tasks.length === 0 ? (
          <p className="empty">No tasks yet!</p>
        ) : (
          tasks.map((t, index) => (
            <li key={index}>
              <span>{t}</span>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
