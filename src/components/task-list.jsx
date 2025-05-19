import React from "react";
import TaskCard from "./task-card";
import { TaskContext } from "../context/task-context";
import { useContext } from "react";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="grid grid-cols-4 gap-2 list-none p-5 rounded-md">
      {tasks.map(({ id, title, description }) => (
        <TaskCard
          key={id || Math.random()}
          id={id}
          title={title}
          description={description}
        />
      ))}
      {tasks.length === 0 && (
        <h2 className="col-span-3 ml-31 mt-2.5 text-xl ">
          No hay tareas disponibles
        </h2>
      )}
    </div>
  );
};

export default TaskList;
