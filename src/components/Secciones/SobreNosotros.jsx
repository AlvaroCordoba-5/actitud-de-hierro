import React from "react";
import Portadas from "../Portadas/Portadas";
import Footer from "../Footer/Footer";
import imgsobre from "../imagenes/sobrenosotros.png";
import nosotros from "../imagenes/nosotros.png";
import Whatsapp from "../Botones/Whatsapp";
import "./Css/Sobrenosotros.css";

function SobreNosotros() {
  return (
    <>
      <Portadas image={imgsobre} texto="SOBRE NOSOTROS" />
      <Whatsapp />

      <div className="container-nosotros">
        <section className="container-nosotros-p">
          <h1>¿Quiénes somos?</h1>
          <p>
          Somos un emprendimiento especialista en estructuras metálicas y productos para el hogar que se esfuerza día a día para llegar a más hogares, con el objetivo de que puedan tener un producto de calidad, garantizándote puntualidad con la entrega y excelentes resultados.
</p>
        </section>
        <div className="container-nosotros-img">
          <img src={nosotros} alt="img-sobreNostros"></img>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SobreNosotros;
