import React, { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/task-context";

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
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title">Ingrese el título</label>
        <input type="text" onChange={titleChange} value={title} id="title" />
        {showValidation && title.length < 5 ? (
          <p style={{ color: "red" }}>Debe contener al menos 5 caracteres</p>
        ) : (
          ""
        )}
        <label htmlFor="description">Ingrese su descripción</label>
        <textarea
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

        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
};

export default FormTareas;
