import React, { useState } from "react";

function EditBtn(props) {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(props.value);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleTaskInputChange = (e) => {
    setInputValue(e.target.value);
  };

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
        <button className="done-edit-btn" onSubmit={handleSubmit}>
          Done
        </button>
      </li>
    );
  } else {
    return (
      <button className="edit-btn" onClick={handleEdit}>
        <i class="fa-solid fa-pencil" />
      </button>
    );
  }

  // return (
  //   <button className="Edit-btn">
  //     <i class="fa-solid fa-pencil" />
  //   </button>
  // );
}

export default EditBtn;
