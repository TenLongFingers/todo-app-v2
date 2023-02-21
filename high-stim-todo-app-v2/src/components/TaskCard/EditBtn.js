import React, { useState } from "react";

const EditBtn = (props) => {
  const handleEditBtnClick = () => {
    props.onClick(props.index);
  };

  return;
  <button className="edit-btn" onClick={handleEditBtnClick}>
    edit
  </button>;
};

export default EditBtn;
