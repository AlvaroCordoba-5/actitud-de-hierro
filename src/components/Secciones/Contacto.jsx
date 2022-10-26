import React from "react";
import Portadas from "../Portadas/Portadas";
import imgcontacto from "../imagenes/contacto.png";
import Formulario from "../Formulario/Formulario";
import { BsWhatsapp } from "react-icons/bs";
import { BiAt } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import "./Css/Contacto.css";
import Footer from "../Footer/Footer";

function Contacto() {
  return (
    <>
      <Portadas image={imgcontacto} texto="CONTACTO" />

      <div className="container-contacto">
        <h1>Solicita la informacion que necesitas</h1>
        <div className="form-info">
          <Formulario />
          <ul>
            <div className="icon-li">
              <BsWhatsapp className="icons" size="1.4em" />
              <li>11 2345-6789</li>
            </div>

            <div className="icon-li">
              <BiAt
                className="icons"
                size="1.7em"
                style={{ marginLeft: "-0.2em" }}
              />
              <li>actituddehierro@gmail.com</li>
            </div>

            <div className="icon-li">
              <IoLocationOutline
                className="icons"
                size="1.9em"
                style={{ marginLeft: "-0.3em" }}
              />
              <li>Pilar, Buenos Aires</li>
            </div>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
