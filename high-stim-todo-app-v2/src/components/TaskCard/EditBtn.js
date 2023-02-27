import React from "react";

const EditBtn = (props) => {
  const handleClick = () => {
    props.onClick(props.index);
  };

  return (
    <button className="edit-btn" onClick={handleClick}>
      Edit
    </button>
  );
};

export default EditBtn;
