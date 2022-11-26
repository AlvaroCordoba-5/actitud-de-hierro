import React from "react";
import Portadaprincipal from "../Portadas/Portadaprincipal";
import GaleriaProductos from "../Galerias/galeriaProductos";
import GaleriaSlider from "../Galeria-Slider/galeriaSlider";
import Formulario from "../Formulario/Formulario";
import Footer from "../Footer/Footer";
import Whatsapp from "../Botones/Whatsapp";
import s1 from '../imagenes/Servicios1.png'
import s2 from '../imagenes/Servicios2.png'
import "./Css/Inicio.css";

function Inicio() {
  return (
    <>
      <Portadaprincipal />

      <Whatsapp />

      <div className="servicios">
        <h1>Servicios</h1>

        <div className="container-img-servicios">
          <div className="img-servicios">
            <h2
              style={{
                color: "white",
                position: "absolute",
                marginLeft: "2em",
                fontFamily: "Poppins",
              }}
            >
              Obras
            </h2>
            <img
              src={s1}
              alt="obras"
            />
            <p>
              <h3>¿Tenés un proyecto y buscas alguien de confianza?</h3>
              En ACTITUD DE HIERRO te ofrecemos un servicio profesional avalado por más de 10 años de experiencia, personalizado y garantizándote resultados y entrega en tiempo y forma.
            </p>
          </div>

          <div className="img-servicios">
            <h2
              style={{
                color: "white",
                position: "absolute",
                marginLeft: "2em",
                fontFamily: "Poppins",
              }}
            >
              Trabajos particulares
            </h2>
            <img
              src={s2}
              alt="trabajos particulares"
            />
            <p>
              <h3>¿Estás buscando generar en nuevo ambiente en tu hogar?</h3>
              En ADH hacemos realidad tu idea con nuestros trabajos personalizados, con presupuestos al instante para que puedas disfrutar de tu proyecto lo antes posible.
            </p>
          </div>
        </div>
      </div>

      <GaleriaSlider />

<GaleriaProductos/>

<div className="inicio-formulario" >
<h4 >
            ¿Necesitas realizar un trabajo personalizado en hierro?
          </h4>
          <h1>Contactanos</h1>
<Formulario/>
</div>
<Footer/>
 {/*
            */}
    </>
  );
}

export default Inicio;
