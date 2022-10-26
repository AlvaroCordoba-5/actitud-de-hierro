import React from "react";
import Portadas from "../Portadas/Portadas";
import imgproductos from "../imagenes/productos.png";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
import "./Css/Productos.css";

function Productos() {
  return (
    <>
      <Portadas image={imgproductos} texto="PRODUCTOS" />
      <div className="list-products">
        <div className="element-products">
          <h4>Pergolas</h4>
          <h6>|</h6>
        </div>
        <div className="element-products">
          <h4>Entrepisos</h4>
          <h6>|</h6>
        </div>
        <div className="element-products">
          <h4>Sillas</h4>
          <h6>|</h6>
        </div>
        <div className="element-products">
          <h4>Mesas</h4>
          <h6>|</h6>
        </div>
        <div className="element-products">
          <h4>Puertas y portones</h4>
          <h6>|</h6>
        </div>
        <div className="element-products">
          <h4>Parillas</h4>
          <h6>|</h6>
        </div>
        <div className="element-products">
          <h4>Ventanas</h4>
          <h6>|</h6>
        </div>
        <div className="element-products">
          <h4>Rejas</h4>
          <h6>|</h6>
        </div>
        <div className="element-products">
          <h4>Escaleras y barandas</h4>
        </div>
      </div>
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
          product="Pergolas"
          title="Mesa Turkif"
          img="https://media.pilideco.com.ar/shop/2721/mesa-ratona-madera-dura-y-hierro.jpg"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
    and typesetting industry. Lorem Ipsum has been the industry"
        />
        <Products
          product="Entrepisos"
          title="Silla Turkif"
          img="https://www.widas.com.ar/wp-content/uploads/2022/10/nga-2.jpg"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
    and typesetting industry. Lorem Ipsum has been the industry"
        />
        <Products
          product="Sillas"
          title="Silla Turkif"
          img="https://www.widas.com.ar/wp-content/uploads/2022/10/nga-2.jpg"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
    and typesetting industry. Lorem Ipsum has been the industry"
        />
        <Products
          product="Mesas"
          title="Silla Turkif"
          img="https://www.widas.com.ar/wp-content/uploads/2022/10/nga-2.jpg"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
    and typesetting industry. Lorem Ipsum has been the industry"
        />
        <Products
          product="Puertas y portones"
          title="Silla Turkif"
          img="https://www.widas.com.ar/wp-content/uploads/2022/10/nga-2.jpg"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
    and typesetting industry. Lorem Ipsum has been the industry"
        />
        <Products
          product="Parrillas"
          title="Silla Turkif"
          img="https://www.widas.com.ar/wp-content/uploads/2022/10/nga-2.jpg"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
    and typesetting industry. Lorem Ipsum has been the industry"
        />
        <Products
          product="Ventanas"
          title="Silla Turkif"
          img="https://www.widas.com.ar/wp-content/uploads/2022/10/nga-2.jpg"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
    and typesetting industry. Lorem Ipsum has been the industry"
        />
        <Products
          product="Rejas"
          title="Silla Turkif"
          img="https://www.widas.com.ar/wp-content/uploads/2022/10/nga-2.jpg"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
    and typesetting industry. Lorem Ipsum has been the industry"
        />
        <Products
          product="Escaleras y barandas"
          title="Silla Turkif"
          img="https://www.widas.com.ar/wp-content/uploads/2022/10/nga-2.jpg"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
    and typesetting industry. Lorem Ipsum has been the industry"
        />
      </div>
      <Footer/>
    </>
  );
}

export default Productos;
