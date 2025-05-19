import React, { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/task-context";
import toast from "react-hot-toast";

const FormTareas = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showValidation, setShowValidation] = useState(false);
  const { createTask } = useContext(TaskContext);

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length < 5 || description < 5) {
      setShowValidation(true);
      return;
    }

    createTask(title, description);
    setTitle("");
    setDescription("");
    setShowValidation(false);
    toast.success("Tarea agregada correctamente", {
      position: "top-center",
      duration: 2000,
    });
  };

  return (
    <div>
      <form
        className="flex justify-center align-middle column gap-2.5 mt-12.5 flex-col"
        onSubmit={handleSubmit}
      >
        <label className="w-50 m-auto" htmlFor="title">
          Ingrese el título
        </label>
        <input
          className="p-2 h-7.5 w-50 m-auto border-b-1 border-gray-400"
          type="text"
          onChange={titleChange}
          value={title}
          id="title"
        />
        {showValidation && title.length < 5 ? (
          <p style={{ color: "red" }}>Debe contener al menos 5 caracteres</p>
        ) : (
          ""
        )}
        <label className="w-50 m-auto" htmlFor="description">
          Ingrese su descripción
        </label>
        <textarea
          className="border-b-1 border-gray-400 p-1 h-7.5 overflow-hidden w-100 m-auto"
          type="text"
          onChange={descriptionChange}
          value={description}
          id="description"
        />
        {showValidation && description.length < 5 ? (
          <p style={{ color: "red" }}>Debe contener al menos 5 caracteres</p>
        ) : (
          ""
        )}
        <div className="flex m-auto ">
          <button
            className="bg-indigo-600 rounded-md p-2 hover:bg-indigo-700 cursor-pointer text-white mb-10 mt-3"
            type="submit"
          >
            Agregar Tarea
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTareas;
