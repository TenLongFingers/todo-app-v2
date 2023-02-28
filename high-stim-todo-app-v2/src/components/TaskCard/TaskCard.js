import React, { useState } from "react";
import DeleteBtn from "./DeleteBtn";
import Checkbox from "./Checkbox";

function TaskCard(props) {
  console.log(props);
  //for the edit button
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(props.value);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEditBtnClick = () => {
    setEditing(true);
  };

  const handleTaskInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //For the submit button when user finishes editing
  const handleDoneBtn = () => {
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
        <Checkbox />
        {props.value}
        <button onClick={handleEditBtnClick}>
          <i className="fa-solid fa-pencil" />
        </button>
        <DeleteBtn />
      </li>
    );
  }
}

export default TaskCard;
