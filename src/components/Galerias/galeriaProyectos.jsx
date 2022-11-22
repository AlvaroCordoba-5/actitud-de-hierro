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
       {/* start container1*/}
       
         <div className="container1-galeria">
          
         
          <div className="container1-twoimages">
            <div className="container1-image">
              <h2 className="name">Pergolas</h2>
              <ModalImage  small={img1} medium={img1} alt="Lorem ipsum" />
            </div>

            <div className="container1-image">
              <h2 className="name">Pergolas</h2>
              <ModalImage  small={img2} medium={img2} alt="Lorem ipsum" />
            </div>
          </div>

          <div className="container1-oneimage">
          <div className="container1-image1">
              <h2 className="name">Pergolas</h2>
              <ModalImage className='image-galeria' small={img3} medium={img3} alt="Lorem ipsum" />
            </div>
          </div>
        </div>
        {/* finish container1*/}

{/* start container2*/}

<div className="container2-galeria column">

  
<div className="container1-twoimages ">
            <div className="container1-image">
              <h2 className="name">Sillas</h2>
              <ModalImage className='image-galeria' small={img8} medium={img8} alt="Lorem ipsum" />
            </div>

            <div className="container1-image">
              <h2 className="name">Mesas</h2>
              <ModalImage className='image-galeria' small={img6} medium={img6} alt="Lorem ipsum" />
            </div>
          </div>
          <div className="container1-oneimage">
          <div className="container1-image1">
              <h2 className="name">Entrepisos</h2>
              <ModalImage className='image-galeria'  small={img9} medium={img9} alt="Lorem ipsum" />
            </div>
          </div>

</div>

{/* finish container2*/}

      </div>
    </>
  );
}

export default galeriaProyectos;
