import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const edad = 18;

  const sumar = () => {
    const numero = 5;
    if (numero > 5) {
      console.log("Si es mayor a 5");
    } else {
      console.log("No es mayor a 5");
    }
  };

  sumar();

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {1 + 1}
        {edad >= 18 ? "Eres mayor de edad" : "No eres mayor de edad"}
        <h2>{"Me llamo Daniel".toLocaleLowerCase()}</h2>
        <h1>Hola mundo</h1>
      </div>
    </>
  );
}

export default App;
