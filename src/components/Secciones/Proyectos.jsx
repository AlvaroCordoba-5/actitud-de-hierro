import React from 'react';
import Portadas from '../Portadas/Portadas';
import imgproyectos from '../imagenes/proyectos.png'
import GaleriaProyectos from '../Galerias/galeriaProyectos';
import portadaimg from '../imagenes/portada.png';
import Formulario from "../Formulario/Formulario";
import Footer from '../Footer/Footer';


function Proyectos() {
  return (
    <>
    <Portadas
    image={imgproyectos}
    texto='PROYECTOS'
    />
    <GaleriaProyectos
   img1={portadaimg}
   img2={portadaimg}
   img3={portadaimg}
   img4={portadaimg}
   img5={portadaimg}
   img6={portadaimg}
   img7={portadaimg}
   img8={portadaimg}
   img9={portadaimg}
   img10={portadaimg}
    />

<Formulario/>
<Footer/>

    </>
  )
}

export default Proyectos