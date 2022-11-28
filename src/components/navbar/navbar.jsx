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
           
          </Link>
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
