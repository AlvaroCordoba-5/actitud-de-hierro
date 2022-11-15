import React from "react";
import "./Boton.css";

function Boton2({ img, texto }) {
  return (
    <>
      
        <div className="button secundario">
      
          <h2>{img}</h2>
          <h2>{texto}</h2> 
        
        </div>
     
    </>
  );
}

export default Boton2;
