import React, { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskCard from "../TaskCard/TaskCard";

function TaskBank() {
  const [taskBankList, setTaskBankList] = useState([]);

  const addItem = (value) => {
    setTaskBankList([...taskBankList, value]);
  };

  //JSX
  return (
    <section className="task-bank">
      <NewTaskForm onSubmit={addItem} />
      <ul className="task-bank-list">
        {taskBankList.map((item, index) => (
          <TaskCard key={index} value={item} />
        ))}
      </ul>
    </section>
  );
}

export default TaskBank;
