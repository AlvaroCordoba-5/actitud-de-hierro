import React from "react";
import "./galeria.css";

function galeriaProyectos({
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
}) {
  return (
    <>
      <div className="container-galeria">
       
        <div className="container1">
            <div className="container1-2">
           <a className="see-more" href="">ver mas</a>
            <h2 className="name">Lorem ipsum</h2>
          <img src={img1} alt="img" />
          </div>
          <div className="container1-2">
          <h2 className="name">Lorem ipsum</h2>
          <img src={img2} alt="img" />
          </div>
        </div>

        <div className="container22">
        <h2 className="name">Lorem ipsum</h2>
          <img src={img3} alt="img" />
        </div>

        <div className="container3">
        <h2 className="name">Lorem ipsum</h2>
          <img src={img4} alt="img" />
          <div className="container3-img">
            <div>
          <h2 className="name">Lorem ipsum</h2>
            <img src={img5} alt="img" />
            </div>
            <div>
            <h2 className="name">Lorem ipsum</h2>
            <img src={img6} alt="img" />
            </div>
          </div>
        </div>

        <div className="container22">
        <h2 className="name">Lorem ipsum</h2>
          <img src={img7} alt="img" />
        </div>

        <div className="container3">
          <div className="container3-img">
            <div>
          <h2 className="name">Lorem ipsum</h2>
            <img src={img9} alt="img" />
            </div>
            <div>
            <h2 className="name">Lorem ipsum</h2>
            <img src={img10} alt="img" />
            </div>
          </div>
         <div className="last-cont">
         <h2 className="name">Lorem ipsum</h2>
          <img src={img8} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default galeriaProyectos;
