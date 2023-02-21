import React from "react";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import Checkbox from "./Checkbox";

function TaskCard(props) {
  return (
    <li className="task-card">
      <Checkbox />
      {props.value}
      <EditBtn />
      <DeleteBtn />
    </li>
  );
}

export default TaskCard;
