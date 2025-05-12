import React, { useEffect, useState } from "react";
import { TaskContext } from "./task-context";
import { tareas } from "../data/tasks";

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (taskTitle, taskDescription) => {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        description: taskDescription,
      },
    ]);
  };

  const handleDeleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  useEffect(() => {
    setTasks(tareas);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask,
        handleDeleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
