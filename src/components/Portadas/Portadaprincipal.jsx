import React from "react";
import Navbar from "../navbar/navbar";
import imagePortada from "../imagenes/portada.png";
import Boton from "../Botones/Boton";
import Whatsapp from "../Botones/Whatsapp";
import NavbarResponsive from "../navbar/navbar-responsive";
import MenuResponsive from "../navbar/menu-responsive";
import "./portada.css";

function Portadaprincipal() {

  return (
    <>


      <div className="portada" >

        <div className="menu-phone">
          <MenuResponsive />
        </div>

        <div className="menu-desktop">
          <Navbar />
        </div>



        <div className="textos">
          <h1>ACTITUD DE HIERRO</h1>
          <h4>Trabajos de herrería</h4>
          <Boton
            texto={"Cotizamos tu proyecto"}

          ></Boton>
        </div>




      </div>
    </>
  );
}

export default Portadaprincipal;
