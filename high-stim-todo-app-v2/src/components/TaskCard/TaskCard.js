import React, { useState } from "react";

function TaskCard(props) {
  //For the edit button
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(props.value);

  //changes state to editing
  const handleEditBtn = () => {
    setEditing(true);
  };

  //tracks changes so they can be passed as a prop in the input form and update the input value
  const handleTaskInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //for the delete button
  const handleDeleteBtn = () => {
    props.onDelete(props.index);
  };

  //for the checkbox. It's just delete right now, but I want a different function so I can target it for animations
  const handleCheckbox = () => {
    props.onDelete(props.index);
  };

  //For the submit button when user finishes editing
  const handleDoneBtn = () => {
    props.onEdit(props.index, inputValue);
    setEditing(false);
  };

  //JSX
  if (editing) {
    return (
      <li>
        <input
          type="text"
          value={inputValue}
          onChange={handleTaskInputChange}
        />
        <button onClick={handleDoneBtn}> Done </button>
      </li>
    );
  } else {
    return (
      <li>
        <input type="checkbox" onChange={handleCheckbox}></input>
        {props.value}
        <button onClick={handleEditBtn}>
          <i className="fa-solid fa-pencil" />
        </button>
        <button onClick={handleDeleteBtn}>
          <i className="fa-solid fa-trash" />
        </button>
      </li>
    );
  }
}

export default TaskCard;
