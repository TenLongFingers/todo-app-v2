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
    console.log(newTaskValue);
  };
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-form-input"
        name="newTaskValue"
        value={newTaskValue}
        onChange={handleChange}
      ></input>
      <button className="add-new-task-btn" type="submit">
        <i className="fa-solid fa-plus"></i>
        Add
      </button>
    </form>
  );
};

export default NewTaskForm;
