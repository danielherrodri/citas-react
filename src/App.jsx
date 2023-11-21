import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Formulario />
      <ListadoPacientes />
    </>
  );
}

export default App;
