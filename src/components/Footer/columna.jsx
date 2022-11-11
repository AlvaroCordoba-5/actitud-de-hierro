import React from "react";
import './Footer.css';

function columna({ titulo, texto1, texto2, texto3, texto4, texto5, texto6, texto7 }) {
  return (
    <div className="columna">

      <h1>{titulo}</h1>
      <ul>
        <li>{texto1}</li>
        <li>{texto2}</li>
        <li>{texto3}</li>
        <li>{texto4}</li>
        <li>{texto5}</li>
        <li>{texto6}</li>
        <li>{texto7}</li>
      </ul>
    </div>

  );
}

export default columna;
