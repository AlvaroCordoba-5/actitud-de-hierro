import React from "react";
import Portadaprincipal from "../Portadas/Portadaprincipal";
import GaleriaProductos from "../Galerias/galeriaProductos";
import "./Css/Inicio.css";

function Inicio() {
  return (
    <>
      <Portadaprincipal />

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
              src="https://i.pinimg.com/236x/47/07/67/4707671b0d518e76e6182074bb1815c0.jpg"
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

<div className="servicios proyectos">
<h1
          style={{
            marginLeft: "2.4em",
            fontFamily: "Zilla Slab",
            marginBottom: "2em",
            fontSize: "3em",
          }}
        >
          Nuestro Proyectos
        </h1>
<div className="container-img-servicios">
        <img
              src="https://i.pinimg.com/236x/47/07/67/4707671b0d518e76e6182074bb1815c0.jpg"
              alt="trabajos particulares"
            />
</div>
</div>

<GaleriaProductos
 img1="https://i.pinimg.com/236x/47/07/67/4707671b0d518e76e6182074bb1815c0.jpg"
 img2="https://i.pinimg.com/236x/47/07/67/4707671b0d518e76e6182074bb1815c0.jpg"
 img3="https://i.pinimg.com/236x/47/07/67/4707671b0d518e76e6182074bb1815c0.jpg"
 img4="https://i.pinimg.com/236x/47/07/67/4707671b0d518e76e6182074bb1815c0.jpg"
 img5="https://i.pinimg.com/236x/47/07/67/4707671b0d518e76e6182074bb1815c0.jpg"
 img6="https://i.pinimg.com/236x/47/07/67/4707671b0d518e76e6182074bb1815c0.jpg"
 img7="https://i.pinimg.com/236x/47/07/67/4707671b0d518e76e6182074bb1815c0.jpg"
 img8="https://i.pinimg.com/236x/47/07/67/4707671b0d518e76e6182074bb1815c0.jpg"
 img9="https://i.pinimg.com/236x/47/07/67/4707671b0d518e76e6182074bb1815c0.jpg"



/>

    </>
  );
}

export default Inicio;
