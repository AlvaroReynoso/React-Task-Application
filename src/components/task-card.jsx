import { useContext } from "react";
import { TaskContext } from "../context/task-context";
import toast from "react-hot-toast";

const TaskCard = ({ id, title, description }) => {
  const { handleDeleteTask } = useContext(TaskContext);

  const handleTask = () => {
    handleDeleteTask(id);
    toast.success("Tarea eliminada correctamente", {
      position: "top-center",
      duration: 2000,
    });
  };
  return (
    <div className="bg-gray-700 text-white border-1 border-gray-700 rounded-sm ">
      <div className="flex p-2.5  rounded-md m-0 justify-center">
        <li key={id}>
          <h2 className="text-xl capitalize">{title}</h2>
          <h3 className="text-gray-300 text-sm">{description}</h3>
        </li>
      </div>
      <div>
        <button
          className="bg-red-500 text-white rounded-md p-1.5 hover:bg-red-600 cursor-pointer"
          onClick={handleTask}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
