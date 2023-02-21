import React from "react";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import Checkbox from "./Checkbox";

function TaskCard() {
  return (
    <li className="task-card">
      <Checkbox></Checkbox>
      <EditBtn></EditBtn>
      <DeleteBtn></DeleteBtn>
    </li>
  );
}

export default TaskCard;
