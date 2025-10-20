import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  let myObj = { name: "Dysie", age: 22 };
  let newArr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card username="Dysie" post="QA" myArr={newArr}/>
      <Card />
      <Card />
    </>
  );
}

export default App;
