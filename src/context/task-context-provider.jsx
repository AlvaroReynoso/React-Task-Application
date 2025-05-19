import React, { useEffect, useState } from "react";
import { TaskContext } from "./task-context";
import { tareas } from "../data/tasks";
import { v4 as uuidv4 } from "uuid";

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, description) => {
    const newTask = { id: uuidv4(), title, description };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
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
