import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<any[]>([]);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
    </div>
  );
};

export default App;
