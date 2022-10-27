import React from "react";
import Portadaprincipal from "../Portadas/Portadaprincipal";
import GaleriaProductos from "../Galerias/galeriaProductos";
import GaleriaSlider from "../Galeria-Slider/galeriaSlider";
import Formulario from "../Formulario/Formulario";
import Footer from "../Footer/Footer";
import Whatsapp from "../Botones/Whatsapp";
import "./Css/Inicio.css";

function Inicio() {
  return (
    <>
      <Portadaprincipal />
 
    <Whatsapp/>


      <div className="servicios">
        <h1
          style={{
            marginLeft: "2.4em",
            fontFamily: "Zilla Slab",
            marginBottom: "2em",
            fontSize: "3em",
          }}
        >
          Servicios
        </h1>

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
              src="https://i.pinimg.com/236x/2f/fc/d3/2ffcd3ddbde0856d6edcd4866f36445e.jpg"
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
              src="https://image.shutterstock.com/image-photo/blacksmith-manually-forging-molten-metal-600w-1908448183.jpg"
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

<GaleriaSlider/>

<GaleriaProductos
 img1='https://image.shutterstock.com/image-photo/green-tile-corner-story-neoclassical-600w-2148522595.jpg'
 img2="https://image.shutterstock.com/image-photo/handmade-wooden-table-iron-legs-600w-1822453556.jpg"
 img3="https://image.shutterstock.com/image-photo/two-metal-chairs-table-painted-600w-2175566317.jpg"
 
/>
<div style={{display:'flex',justifyContent:'center',marginTop:'10em',flexDirection:'column',alignItems:'center'}}>
<h4 style={{ fontFamily: "Poppins", fontStyle: "normal",fontWeight:'300',marginBottom:'-0.5em'}}>
            ¿Necesitas realizar un trabajo personalizado en hierro?
          </h4>
          <h1 style={{ fontFamily: "Zilla Slab", fontStyle: "normal",fontWeight:'700',marginBottom:'2em'}}>Contactanos</h1>
<Formulario/>
</div>
<Footer/>

    </>
  );
}

export default Inicio;
