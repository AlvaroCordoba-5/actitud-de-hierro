import React from "react";
import "./Products.css";

function cardProducts({ title, img, text }) {

const handlesubmit=()=>window.open(`http://api.whatsapp.com/send?phone=+5491123992937&text=Hola, te queria consultar por ${title}`, '_blank');

  return (
    <>
      <div className="card-container">
        <h2>{title}</h2>
        <div className="cont-img">
          <img src={img} alt='img' />
          <p>{text}</p>
          
          <input onClick={handlesubmit} type="submit" value="Enviar Mensaje" />
          
        </div>
      </div>
    </>
  );
}

export default cardProducts;
