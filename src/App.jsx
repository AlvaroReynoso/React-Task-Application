import { Toaster } from "react-hot-toast";
import "./App.css";
import FormTareas from "./components/form-tareas";
import TaskList from "./components/task-list";

function App() {
  return (
    <main>
      <div className="container mx-auto">
        <h1 className="text-5xl text-red-400">Tareas</h1>
        <FormTareas />
        <TaskList />
        <Toaster />
      </div>
    </main>
  );
}

export default App;
