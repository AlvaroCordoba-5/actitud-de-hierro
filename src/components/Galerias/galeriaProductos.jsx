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
    <div style={{marginLeft:'16.9em'}}>
          <h1
            style={{
              fontFamily: "Zilla Slab",
              marginBottom: "2em",
              fontSize: "3em",
            }}
          >
            Productos
          </h1>
        </div>
      <div className="container-galeria-productos">
        

        <div className="container-prod">
          <div className="one-prod">
            <h2 className="name">Lorem ipsum</h2>
            <img src={img1} alt="img" />
          </div>

          <div className="two-prod">
            <div className="two-prod-img">
              <h2 className="name">Lorem ipsum</h2>
              <img src={img3} alt="img" />
            </div>
            <div className="two-prod-img">
              <h2 className="name">Lorem ipsum</h2>
              <img src={img2} alt="img" />
            </div>
          </div>
        </div>

        <div className="container-prod">
          <div className="two-prod">
            <div className="two-prod-img">
              <h2 className="name">Lorem ipsum</h2>
              <img src={img1} alt="img" />
            </div>
            <div className="two-prod-img">
              <h2 className="name">Lorem ipsum</h2>
              <img src={img2} alt="img" />
            </div>
          </div>

          <div className="one-prod">
            <h2 className="name">Lorem ipsum</h2>
            <img src={img3} alt="img" />
          </div>
        </div>

        <div className="container-prod">
          <div className="one-prod">
            <h2 className="name">Lorem ipsum</h2>
            <img src={img3} alt="img" />
          </div>

          <div className="two-prod">
            <div className="two-prod-img">
              <h2 className="name">Lorem ipsum</h2>
              <img src={img1} alt="img" />
            </div>
            <div className="two-prod-img">
              <h2 className="name">Lorem ipsum</h2>
              <img src={img2} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default galeriaProductos;
