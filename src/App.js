import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./components/Secciones/Inicio";
import Proyectos from "./components/Secciones/Proyectos";
import Productos from "./components/Secciones/Productos";
import SobreNosotros from "./components/Secciones/SobreNosotros";
import Contacto from "./components/Secciones/Contacto";


function App() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Inicio/>} />
      <Route exact path={"/proyectos"} element={<Proyectos/>} />
      <Route exact path={"/productos"} element={<Productos/>} />
      <Route exact path={"/sobrenosotros"} element={<SobreNosotros/>} />
      <Route exact path={"/contacto"} element={<Contacto/>} />
    </Routes>
  );
}

export default App;
