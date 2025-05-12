import React from "react";
import TaskCard from "./task-card";
import { TaskContext } from "../context/task-context";
import { useContext } from "react";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <ul>
        {tasks.map(({ id, title, description }) => (
          <TaskCard
            key={id || Math.random()}
            id={id}
            title={title}
            description={description}
          />
        ))}
      </ul>
      {tasks.length === 0 && <h2>No hay tareas disponibles</h2>}
    </div>
  );
};

export default TaskList;
