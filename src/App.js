import React from "react";
import { Route, Routes } from "react-router-dom";
import Portadaprincipal from "./components/Portadas/Portadaprincipal";
import Proyectos from "./components/Secciones/Proyectos";

function App() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Portadaprincipal/>} />
      <Route exact path={"/proyectos"} element={<Proyectos/>} />
    </Routes>
  );
}

export default App;
