import React from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import NavbarResponsive from "./navbar-responsive";
import NavbarClose from "./NavbarClose";
import "./navbar.css";
import { useState } from "react";

function MenuResponsive() {
  const [view, Setview] = useState(true);

  const handleclick = () => Setview(!view);

  console.log(view);

  return (
    <>
      <div className={view ? "button-open-close" : "view"}>
        <NavbarResponsive handleclick={handleclick} view={view} />
      </div>
      <div className="navbar-responsive">
        <div className={view ? "view" : "none"}>
          <div className="button-close">
            <NavbarClose handleclick={handleclick} />
          </div>
          <ul className="nav direction">
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
                <Link to="/proyectos">Pergolas  </Link>
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
      </div>
    </>
  );
}

export default MenuResponsive;
