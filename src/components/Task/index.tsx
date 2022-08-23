import React from "react";
import { Task } from "./types";

const Task = ({ name, description, isActive }: Task) => {
  return (
    <>
      <div className="flex flex-col w-48 h-48 border-2 rounded-lg border-slate-600 m-4 p-4 justify-center">
        <h1>{name}</h1>
        <p>{description}</p>
        {isActive ? "TERMINADA" : "PENDIENTE"}
      </div>
    </>
  );
};

export default Task;
