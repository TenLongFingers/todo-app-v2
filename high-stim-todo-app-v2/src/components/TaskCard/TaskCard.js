import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

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

  //for the checkbox. It's just delete for now, but I want a different function so I can target it for animations
  const handleCheckbox = () => {
    props.onDelete(props.index);
  };

  //For the submit button when user finishes editing
  const handleDoneBtn = () => {
    props.onEdit(props.index, inputValue);
    setEditing(false);
  };

  //JSX

  //checks to see if the task is being edited and allows user to input a new value, otherwise it just displays the task's value
  if (editing) {
    return (
      <li>
        <input
          name="edit task input field"
          type="text"
          value={inputValue}
          onChange={handleTaskInputChange}
          aria-label={`editing task ${inputValue}`}
        />
        <button onClick={handleDoneBtn}> Done </button>
      </li>
    );
  } else {
    //the regular task, if it's not being edited
    return (
      <Draggable>
        {(provided) => (
          <li {...provided.draggableProps} ref={provided.innerRef}>
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
        )}
      </Draggable>
    );
  }
}

export default TaskCard;
