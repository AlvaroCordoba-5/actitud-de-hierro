import React from "react";
import Navbar from "../navbar/navbar";
import Boton2 from "../Botones/Boton2";
import { BsWhatsapp } from "react-icons/bs";

function Portadas({ image, texto }) {
  return (
    <div className="container2">
      <div className="portadas2">
        <img className="image2" src={image} />
        <Navbar />
        <div className="texto-boton">
          <h1>{texto}</h1>
          <a
            style={{ textDecoration: "none" }}
            href="https://wa.me/+5491125069028?text=Hola"
            target={"_blank"}
          >
            <Boton2 img={<BsWhatsapp />} texto="Enviar Whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portadas;