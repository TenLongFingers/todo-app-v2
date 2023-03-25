import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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
  const onDragEnd = (result) => {
    //handle drag end here
  };

  //JSX
  return (
    <section className="task-bank">
      <NewTaskForm onSubmit={addTask} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="task-bank-list">
          {(provided) => (
            <ul
              className="task-bank-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {taskBankList.map((task, index) => (
                <TaskCard
                  key={index}
                  value={task}
                  index={index}
                  draggableID={`task-${index}`}
                  onEdit={editTask}
                  onDelete={deleteTask}
                />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
}

export default TaskBank;
