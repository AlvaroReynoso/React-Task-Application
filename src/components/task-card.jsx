import { useContext } from "react";
import { TaskContext } from "../context/task-context";

const TaskCard = ({ id, title, description }) => {
  const { handleDeleteTask } = useContext(TaskContext);

  const handleTask = () => {
    handleDeleteTask(id);
  };
  return (
    <div>
      <div>
        <li key={id}>
          <h2>{title}</h2>
          <h3>{description}</h3>
        </li>
      </div>
      <div>
        <button onClick={handleTask} style={{ color: "red" }}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
