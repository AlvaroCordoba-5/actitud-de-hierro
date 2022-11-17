import React from "react";
import "./galeria.css";
import img1 from '../Secciones/imagenes-inicio/productos7.png';
import img2 from '../Secciones/imagenes-inicio/productos8.png';
import img3 from '../Secciones/imagenes-inicio/productos6.png';
import img4 from '../Secciones/imagenes-inicio/productos5.png'
import img5 from '../Secciones/imagenes-inicio/productos4.png'
import img6 from '../Secciones/imagenes-inicio/productos3.png'
import img7 from '../Secciones/imagenes-inicio/productos2.png'
import img8 from '../Secciones/imagenes-inicio/productos1.png'
import img9 from '../Secciones/imagenes-inicio/productos9.png'

function galeriaProductos() {
  return (
    <>
    <div className='name-productos' >
          <h1
          >
            Productos
          </h1>
        </div>
      <div className="container-galeria-productos">
        

        <div className="container-prod">
          <div className="one-prod">
            <h2 className="name">Ventanas</h2>
            <img src={img1} alt="img" />
          </div>

          <div className="two-prod">
            <div className="two-prod-img">
              <h2 className="name">Escaleras</h2>
              <img src={img3} alt="img" />
            </div>
            <div className="two-prod-img">
              <h2 className="name">Sillas</h2>
              <img src={img2} alt="img" />
            </div>
          </div>
        </div>

        <div className="container-prod">
          <div className="two-prod">
            <div className="two-prod-img">
              <h2 className="name">Parrilas</h2>
              <img src={img6} alt="img" />
            </div>
            <div className="two-prod-img">
              <h2 className="name">Rejas y barandas</h2>
              <img src={img5} alt="img" />
            </div>
          </div>

          <div className="one-prod">
            <h2 className="name">Pergolas</h2>
            <img src={img4} alt="img" />
          </div>
        </div>

        <div className="container-prod">
          <div className="one-prod">
            <h2 className="name">Puertas y portones</h2>
            <img src={img8} alt="img" />
          </div>

          <div className="two-prod">
            <div className="two-prod-img">
              <h2 className="name">Mesas</h2>
              <img src={img7} alt="img" />
            </div>
            <div className="two-prod-img">
              <h2 className="name">Entrepisos</h2>
              <img src={img9} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default galeriaProductos;
