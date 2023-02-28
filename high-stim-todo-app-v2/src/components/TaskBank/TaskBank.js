import React, { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskCard from "../TaskCard/TaskCard";

function TaskBank() {
  const [taskBankList, setTaskBankList] = useState([]);

  const addTask = (value) => {
    setTaskBankList([...taskBankList, value]);
  };

  //JSX
  return (
    <section className="task-bank">
      <NewTaskForm onSubmit={addTask} />
      <ul className="task-bank-list">
        {taskBankList.map((task, index) => (
          <TaskCard key={index} value={task} />
        ))}
      </ul>
    </section>
  );
}

export default TaskBank;
