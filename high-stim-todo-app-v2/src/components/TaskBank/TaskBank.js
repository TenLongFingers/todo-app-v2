import React from "react";
import NewTaskForm from "./NewTaskForm";
import TaskCard from "../TaskCard/TaskCard";

function TaskBank(props) {
  return (
    <section className="task-bank">
      <ul className="task-bank-list">
        <li>{props.value}</li>
      </ul>
      <NewTaskForm></NewTaskForm>
      <TaskCard></TaskCard>
    </section>
  );
}

export default TaskBank;
