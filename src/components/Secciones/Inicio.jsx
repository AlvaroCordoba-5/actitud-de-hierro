import React from "react";
import Portadaprincipal from "../Portadas/Portadaprincipal";
import GaleriaProductos from "../Galerias/galeriaProductos";
import GaleriaSlider from "../Galeria-Slider/galeriaSlider";
import Formulario from "../Formulario/Formulario";
import Footer from "../Footer/Footer";
import Whatsapp from "../Botones/Whatsapp";
import s1 from '../imagenes/Servicios1.png'
import s2 from '../imagenes/Servicios2.png'
import f1 from '../imagenes/inicio1.jpg';
import f2 from '../imagenes/inicio2.webp'
import f3 from '../imagenes/inicio3.webp'
import f4 from '../imagenes/inicio4.webp'
import f5 from '../imagenes/inicio5.jpg'
import f6 from '../imagenes/inicio6.jpg'
import f7 from '../imagenes/inicio7.jpg'
import f8 from '../imagenes/inicio8.jpg'
import f9 from '../imagenes/inicio9.jpg'
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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
      </div>

      <GaleriaSlider />

<GaleriaProductos
 img1={f1}
 img2={f2}
 img3={f3}
 img4={f4}
 img5={f5}
 img6={f6}
 img7={f7}
 img8={f8}
 img9={f9}
 
 />
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
