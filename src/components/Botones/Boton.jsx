import React from "react";
import "./Boton.css";

function Boton({ texto }) {
  return (
    <>
      <a
        href="http://api.whatsapp.com/send?phone=+5491123992937&text=Hola, quiero cotizar mi proyecto! "
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="button principal">
          <h2>{texto}</h2>
        </div>
      </a>
    </>
  );
}

export default Boton;
