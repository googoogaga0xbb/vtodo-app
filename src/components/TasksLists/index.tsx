import Task from "@components/Task";
import React from "react";
import { Tasks } from "./types";

const TasksList = ({ tasks }: Tasks) => {
  return (
    <div className="grid">
      <h1 className="my-12">TasksList</h1>

      {tasks.map((task) => (
        <Task
          key={task.name}
          name={task.name}
          description={task.description}
          isActive={task.isActive}
        />
      ))}
    </div>
  );
};

export default TasksList;
