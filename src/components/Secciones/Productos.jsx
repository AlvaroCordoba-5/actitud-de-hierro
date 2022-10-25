import React from "react";
import Portadas from "../Portadas/Portadas";
import imgproductos from "../imagenes/productos.png";
import Products from "../Products/Products";

function Productos() {
  return (
    <>
      <Portadas image={imgproductos} texto="PRODUCTOS" />
      <div
        className="productos"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: " center",
          flexDirection: "column",
        }}
      >
        <Products
          product="Mesas"
          title="Mesa Turkif"
          img="https://media.pilideco.com.ar/shop/2721/mesa-ratona-madera-dura-y-hierro.jpg"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
    and typesetting industry. Lorem Ipsum has been the industry"
        />
      </div>
    </>
  );
}

export default Productos;
