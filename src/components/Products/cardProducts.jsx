import React from "react";
import "./Products.css";

function cardProducts({ title, img, text }) {
  return (
    <>
      <div className="card-container">
        <h2>{title}</h2>
        <div className="cont-img">
          <img src={img} />
          <p>{text}</p>
          <input type="submit" value="Enviar Mensaje" />
        </div>
      </div>
    </>
  );
}

export default cardProducts;
