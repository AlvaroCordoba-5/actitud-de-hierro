import React, { useState } from "react";
import CardProducts from "./cardProducts";
import "./Products.css";
import { BiChevronDown } from "react-icons/bi";
import { RiArrowUpSLine } from "react-icons/ri";


function Productsphone({ product, title, img, text }) {
  const [products, setProducts] = useState(false);

  const handleChange = () => setProducts(!products);

  return (
    <>
      <div>
        <h1 style={{ fontFamily: "Zilla Slab", fontStyle: "normal",marginLeft:'2em'}}>
          {product}
        </h1>
        {products === false ? (
          <div>
            <div className="container-products2">
              <CardProducts title={title} img={img} text={text} />
              <CardProducts title={title} img={img} text={text} />
              
            </div>
            <div className="ver-mas">
              <input
                onClick={handleChange}
                type="submit"
                value="Ver más"
              ></input>
              <BiChevronDown style={{ cursor: "pointer" }}></BiChevronDown>
            </div>
          </div>
        ) : null}
        {products === true ? (
          <>
            <div className="container-products2">
              <CardProducts title={title} img={img} text={text} />
              <CardProducts title={title} img={img} text={text} />
              
            </div>
            <div className="container-products2">
              <CardProducts title="mesa2" img={img} text={text} />
              <CardProducts title={title} img={img} text={text} />
             
            </div>
            <div className="ver-mas">
              <RiArrowUpSLine></RiArrowUpSLine>
              <input
                onClick={handleChange}
                type="submit"
                value="Ver menos"
              ></input>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
export default Productsphone;