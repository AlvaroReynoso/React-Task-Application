import "./App.css";
import FormTareas from "./components/form-tareas";
import TaskList from "./components/task-list";

function App() {
  return (
    <div>
      <h1>Tareas</h1>
      <FormTareas />
      <TaskList />
    </div>
  );
}

export default App;
