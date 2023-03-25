import React, { useState } from "react";

const NewTaskForm = (props) => {
  const [newTaskValue, setNewTaskValue] = useState("");

  //tracks inputs so it can be sent as props
  const handleChange = (e) => {
    setNewTaskValue(e.target.value);
  };

  //submit button, cleans up white space and handles props
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskValue.trim()) {
      props.onSubmit(newTaskValue.trim());
      setNewTaskValue("");
    }
  };

  return (
    //JSX
    <div id="new-task-form-container">
      <form id="new-task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="task-form-input"
          name="newTaskValue"
          value={newTaskValue}
          onChange={handleChange}
          aria-label="Enter a new task"
        />
        <button id="add-new-task-btn" type="submit">
          <i className="fa-solid fa-plus" />
          Add
        </button>
      </form>
    </div>
  );
};

export default NewTaskForm;
