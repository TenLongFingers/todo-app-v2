import React, { useState } from "react";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import Checkbox from "./Checkbox";

function TaskCard(props) {
  //for the edit button
  const [editing, setEditing] = useState(props.value);
  const [inputValue, setInputValue] = useState(props.value);

  const handleEditBtnClick = () => {
    setEditing(true);
  };

  const handleTaskInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //For the submit button when user finishes editing
  const handleSubmit = () => {
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
        <button onClick={handleSubmit}> Done </button>
      </li>
    );
  } else {
    return (
      <li>
        {props.value}
        <EditBtn onClick={handleEditBtnClick} index={props.index} />
      </li>
    );
  }

  //   return (
  //     <li className="task-card">
  //       <Checkbox />
  //       {props.value}
  //       <EditBtn />
  //       <DeleteBtn />
  //     </li>
  //   );
}

export default TaskCard;
