import React from "react";
import { Link } from 'react-router-dom';
import { BiChevronDown } from "react-icons/bi";
import "./navbar.css";

function navbar() {
  return (
    <div className="navbar">
      <ul className="nav">
        <li>
        <Link  to='/'>Inicio </Link>
        </li>
        <li>
          
          <Link  to='/proyectos'>Proyectos </Link>
        </li>

        <li>
        <Link  to='/productos'>Productos<BiChevronDown style={{ cursor: "pointer" }}></BiChevronDown> </Link>
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
        <Link  to='/sobrenosotros'>Sobre nosotros </Link>
          
        </li>
        <li>
        <Link  to='/contacto'>Contacto </Link>
        </li>
      </ul>
    </div>
  );
}

export default navbar;
