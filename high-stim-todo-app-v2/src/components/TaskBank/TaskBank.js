import React from "react";
import NewTaskForm from "./NewTaskForm";
import TaskCard from "../TaskCard/TaskCard";

function TaskBank() {
  return (
    <section className="task-bank">
      <ul class="task-bank-list"></ul>
      <NewTaskForm></NewTaskForm>
      <TaskCard></TaskCard>
    </section>
  );
}

export default TaskBank;
