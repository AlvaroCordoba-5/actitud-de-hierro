import React from 'react';
import Portadas from '../Portadas/Portadas';
import Footer from '../Footer/Footer';
import imgsobre from '../imagenes/sobrenosotros.png';
import Whatsapp from "../Botones/Whatsapp";

function SobreNosotros() {
  return (
    <>
    <Portadas
    image={imgsobre}
    texto='SOBRE NOSOTROS'
    />
    <Whatsapp/>
    <Footer/>
    </>
  )
}

export default SobreNosotros