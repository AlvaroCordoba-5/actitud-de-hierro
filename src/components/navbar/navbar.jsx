import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";

function navbar() {
  return (
    <div className="navbar">
      <ul className="nav">
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          
          <Link  to='/proyectos'>Proyectos </Link>
        </li>

        <li>
          <a href="">Productos</a>
          <ul>
            <li>
              <a href="">Pergolas</a>
            </li>
            <li>
              <a href="">Entrepisos</a>
            </li>
            <li>
              <a href="">Portones / Puertas</a>
            </li>

            <li>
              <a href="">Ventanas / Rejas</a>
            </li>

            <li>
              <a href="">Barandas</a>
            </li>
            <li>
              <a href="">Escaleras</a>
            </li>
            <li>
              <a href="">Parrillas</a>
            </li>
            <li>
              <a href="">Mesas</a>
            </li>
            <li>
              <a href="">Bares estilos industriales</a>
            </li>
            <li>
              <a href="">Sillas</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="">Sobre nosotros</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
      </ul>
    </div>
  );
}

export default navbar;
