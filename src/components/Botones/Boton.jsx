import React from "react";
import "./Boton.css";

function Boton({ texto }) {
  return (
    <>
      <div className="button principal">
        <h2>
          
          {texto}
        </h2>
      </div>
    </>
  );
}

export default Boton;
