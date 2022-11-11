import React from 'react';
import { Link } from 'react-router-dom';
import { BiChevronDown } from "react-icons/bi";
import NavbarResponsive from './navbar-responsive';
import NavbarClose from './NavbarClose';
import "./navbar.css";
import { useState } from 'react';





function MenuResponsive() {

  const [view, Setview] = useState(true)

  const handleclick = () => Setview(!view)

  console.log(view)

  return (
    <>
      <div className={view ? 'button-open-close' : 'view'}>
        <NavbarResponsive
          handleclick={handleclick}
          view={view}
        />
      </div>
      <div className="navbar-responsive">

        <div className={view ? 'view' : 'none'}>
          <div className='button-close'>
            <NavbarClose
              handleclick={handleclick}

            />
          </div>
          <ul className="nav direction">
            <li>
              <Link to='/'>Inicio </Link>
            </li>
            <li>

              <Link to='/proyectos'>Proyectos </Link>
            </li>

            <li>
              <Link to='/productos'>Productos<BiChevronDown style={{ cursor: "pointer" }}></BiChevronDown> </Link>
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
              <Link to='/sobrenosotros'>Sobre nosotros </Link>

            </li>
            <li>
              <Link to='/contacto'>Contacto </Link>
            </li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default MenuResponsive