import React from "react";
import Portadas from "../Portadas/Portadas";
import imgproyectos from "../imagenes/proyectos.png";
import GaleriaProyectos from "../Galerias/galeriaProyectos";
import portadaimg from "../imagenes/portada.png";
import Formulario from "../Formulario/Formulario";
import Whatsapp from "../Botones/Whatsapp";
import Footer from "../Footer/Footer";
import img1 from '../imagenes/inicio2.webp'
import img2 from '../imagenes/inicio3.webp'
import img3 from '../imagenes/inicio1.jpg'
import img4 from './imagenes-proyectos/img4.jpg'
import img5 from './imagenes-proyectos/img5.jpg'
import img6 from './imagenes-proyectos/img6.jpg'
import img7 from './imagenes-proyectos/img7.jpg'
import img8 from './imagenes-proyectos/img8.jpg'
import img9 from  './imagenes-inicio/productos9.png'

function Proyectos() {
  return (
    <>
      <Portadas image={imgproyectos} texto="PROYECTOS" />
      
<div className="list-products">
        <div className="element-products">
          <h4>Pergolas</h4>
        </div>
        <div className="element-products">
          <h4>Entrepisos</h4>
          
        </div>
        <div className="element-products">
          <h4>Sillas</h4>
          
        </div>
        <div className="element-products">
          <h4>Mesas</h4>
          
        </div>
        <div className="element-products">
          <h4>Puertas y portones</h4>
         
        </div>
        <div className="element-products">
          <h4>Parillas</h4>
        
        </div>
        <div className="element-products">
          <h4>Ventanas</h4>
         
        </div>
        <div className="element-products">
          <h4>Rejas</h4>
      
        </div>
        <div className="element-products">
          <h4>Escaleras y barandas</h4>
        </div>
      </div>
          <Whatsapp />
<div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GaleriaProyectos
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          img5={img5}
          img6={img6}
          img7={img7}
          img8={img8}
          img9={img9}
          img10={portadaimg}
        />
        <div
          style={{
            marginTop: "10em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "300",
              marginBottom: "-0.5em",
            }}
          >
            ¿Necesitas realizar un trabajo personalizado en hierro?
          </h4>
          <h1
            style={{
              fontFamily: "Zilla Slab",
              fontStyle: "normal",
              fontWeight: "700",
              marginBottom: "2em",
            }}
          >
            Contactanos
          </h1>
          <Formulario />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Proyectos;
