import React, { useState } from "react";
import { useDrag } from "react-dnd";
import "./TaskCard.css";

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

  //for the checkbox. ADDLATER: It's just delete right now, but I want a different function so I can target it for animations
  const handleCheckbox = () => {
    props.onDelete(props.index);
  };

  //For the submit button when user finishes editing
  const handleDoneBtn = () => {
    props.onEdit(props.index, inputValue);
    setEditing(false);
  };

  //Draggable function
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "TASK-CARD", index: props.index, value: props.value },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  //JSX
  if (editing) {
    return (
      <li>
        <label htmlFor="taskInput">
          <span aria-label={`editing task ${inputValue}`}></span>
        </label>
        <input
          name="edit task input field"
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
        {/* grabber icon */}
        <button
          id="grabber-icon"
          ref={dragRef}
          aria-label={`drag and drop grabber`}
        ></button>
        {/* checkbox */}
        <label
          htmlFor="checkbox"
          aria-label={`complete task ${inputValue}`}
        ></label>
        <input
          type="checkbox"
          name="checkbox"
          onChange={handleCheckbox}
          aria-label={`complete task ${inputValue}`}
        ></input>

        {/* Todo input */}
        {props.value}

        {/* edit button */}
        <button
          id="edit-btn"
          onClick={handleEditBtn}
          aria-label={`edit task ${inputValue}`}
        >
          <i className="fa-solid fa-pencil" />
        </button>

        {/* delete button */}
        <button
          id="delete-btn"
          onClick={handleDeleteBtn}
          aria-label={`delete task ${inputValue}`}
        >
          <i className="fa-solid fa-trash" />
        </button>
      </li>
    );
  }
}

export default TaskCard;
