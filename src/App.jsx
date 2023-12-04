import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Interes from "./components/Interes/Interes";
import Preguntas from "./components/Preguntas/Preguntas";
import Galeria from "./components/Galeria/Galeria";
import Historia from "./components/Historia/Historia";
import Recorridos from "./components/Recorridos/Recorridos";
import Turismo from "./components/Turismo/Turismo";

function App() {
  return (
    <>
      <ChakraProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interes" element={<Interes />} />
          <Route path="/preguntas-frecuentes" element={<Preguntas />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/turismo" element={<Turismo />} />
          <Route path="/recorridos" element={<Recorridos />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
