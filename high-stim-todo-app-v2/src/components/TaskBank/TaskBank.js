import React, { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskCard from "../TaskCard/TaskCard";

function TaskBank() {
  const [taskBankList, setTaskBankList] = useState([]);

  const addTask = (value) => {
    setTaskBankList([...taskBankList, value]);
  };

  const editTask = (index, value) => {
    const newTaskBankList = [...taskBankList];
    newTaskBankList[index] = value;
    setTaskBankList(newTaskBankList);
  };

  const deleteTask = (index) => {
    const newTaskBankList = [...taskBankList];
    newTaskBankList.splice(index, 1);
    setTaskBankList(newTaskBankList);
  };

  //JSX
  return (
    <section className="task-bank">
      <NewTaskForm onSubmit={addTask} />
      <ul className="task-bank-list">
        {taskBankList.map((task, index) => (
          <TaskCard
            key={index}
            value={task}
            index={index}
            onEdit={editTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </section>
  );
}

export default TaskBank;
