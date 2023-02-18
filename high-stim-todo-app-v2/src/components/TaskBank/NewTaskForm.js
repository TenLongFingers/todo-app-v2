import React, { useState } from "react";

const NewTaskForm = () => {
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submit successful");
  };
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-form-input"
        name="newTask"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      ></input>
      <button className="add-new-task-btn" type="submit">
        <i class="fa-solid fa-plus"></i>
        Add
      </button>
    </form>
  );
};

export default NewTaskForm;
