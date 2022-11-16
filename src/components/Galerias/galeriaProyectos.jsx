import React from "react";
import ModalImage from "react-modal-image";
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
            <h2 className="name">Lorem ipsum</h2>
            <ModalImage small={img1} medium={img1} alt="Lorem ipsum" />
          </div>

          <div className="container1-2">
            <h2 className="name">Lorem ipsum</h2>
            <ModalImage small={img1} medium={img1} alt="Lorem ipsum" />
          </div>
        </div>

        <div className="container22">
          <h2 className="name">Lorem ipsum</h2>
          <ModalImage
            className="images22"
            small={img1}
            medium={img1}
            alt="Lorem ipsum"
          />
        </div>

        <div className="container3">
          <h2 className="name">Lorem ipsum</h2>
          <ModalImage
            className="image33"
            small={img1}
            medium={img1}
            alt="Lorem ipsum"
          />

          <div className="container3-img">
            <div style={{marginBottom: '1em'}}>
              <h2 className="name">Lorem ipsum</h2>
              <ModalImage small={img1} medium={img1} alt="Lorem ipsum" />
            </div>
            <div>
              <h2 className="name">Lorem ipsum</h2>
              <ModalImage small={img1} medium={img1} alt="Lorem ipsum" />
            </div>
          </div>
        </div>

        <div className="container22">
          <h2 className="name">Lorem ipsum</h2>
          <ModalImage
            className="images22"
            small={img1}
            medium={img1}
            alt="Lorem ipsum"
          />
        </div>

        <div className="container3">
          <h2 className="name">Lorem ipsum</h2>
          <ModalImage
            className="image33"
            small={img1}
            medium={img1}
            alt="Lorem ipsum"
          />

          <div className="container3-img">
            <div style={{marginBottom: '1em'}}>
              <h2 className="name">Lorem ipsum</h2>
              <ModalImage small={img1} medium={img1} alt="Lorem ipsum" />
            </div>
            <div>
              <h2 className="name">Lorem ipsum</h2>
              <ModalImage small={img1} medium={img1} alt="Lorem ipsum" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default galeriaProyectos;
