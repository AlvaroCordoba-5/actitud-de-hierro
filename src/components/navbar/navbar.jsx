import React from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav">
        <li>
          <Link to="/">Inicio </Link>
        </li>

        <li>
          <Link to="/proyectos">
            Proyectos
            <BiChevronDown style={{ cursor: "pointer" }}></BiChevronDown>{" "}
          </Link>
          <ul>
            <li>
              <Link to="/proyectos">Pergolas </Link>
            </li>
            <li>
              <Link to="/proyectos">Entrepisos</Link>
            </li>
            <li>
              <Link to="/proyectos">Portones / Puertas</Link>
            </li>

            <li>
              <Link to="/proyectos">Ventanas / Rejas</Link>
            </li>

            <li>
              <Link to="/proyectos">Barandas</Link>
            </li>
            <li>
              <Link to="/proyectos">Escaleras</Link>
            </li>
            <li>
              <Link to="/proyectos">Parrillas</Link>
            </li>
            <li>
              <Link to="/proyectos">Mesas</Link>
            </li>
            <li>
              <Link to="/proyectos">Bares estilos industriales</Link>
            </li>
            <li>
              <Link to="/proyectos">Sillas</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/sobrenosotros">Sobre nosotros </Link>
        </li>
        <li>
          <Link to="/contacto">Contacto </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
