import React from "react";
import "./galeria.css";

function galeriaProductos({
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
}) {
  return (
    <>
      <div className="container-galeria-productos">
        <div className="container3">
          <div className="last-cont">
            <h2 className="name">Lorem ipsum</h2>
            <img src={img3} alt="img" />
          </div>
          <div className="container3-img">
            <div>
              <h2 className="name">Lorem ipsum</h2>
              <img src={img1} alt="img" />
            </div>
            <div>
              <h2 className="name">Lorem ipsum</h2>
              <img src={img2} alt="img" />
            </div>
          </div>
        </div>

        <div className="container3">
          <div className="container3-img">
            <div>
              <h2 className="name">Lorem ipsum</h2>
              <img src={img4} alt="img" />
            </div>
            <div>
              <h2 className="name">Lorem ipsum</h2>
              <img src={img5} alt="img" />
            </div>
          </div>
          <div className="last-cont">
            <h2 className="name">Lorem ipsum</h2>
            <img src={img6} alt="img" />
          </div>
        </div>

        <div className="container3">
          <div className="last-cont">
            <h2 className="name">Lorem ipsum</h2>
            <img src={img8} alt="img" />
          </div>

          <div className="container3-img">
            <div>
              <h2 className="name">Lorem ipsum</h2>
              <img src={img7} alt="img" />
            </div>
            <div>
              <h2 className="name">Lorem ipsum</h2>
              <img src={img9} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default galeriaProductos;
