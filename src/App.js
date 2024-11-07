import "./App.css";
import TaskForm from "./app/componentes/TaskForm";
import TaskList from "./app/componentes/TaskList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <Router>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="create-task" element={<TaskForm />} />
            <Route path="edit-task/:id" element={<TaskForm />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
