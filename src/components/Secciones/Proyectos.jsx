import React from "react";
import Portadas from "../Portadas/Portadas";
import imgproyectos from "../imagenes/proyectos.png";
import GaleriaProyectos from "../Galerias/galeriaProyectos";
import portadaimg from "../imagenes/portada.png";
import Formulario from "../Formulario/Formulario";
import Whatsapp from "../Botones/Whatsapp";
import Footer from "../Footer/Footer";

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
          img1={portadaimg}
          img2={portadaimg}
          img3={portadaimg}
          img4={portadaimg}
          img5={portadaimg}
          img6={portadaimg}
          img7={portadaimg}
          img8={portadaimg}
          img9={portadaimg}
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
