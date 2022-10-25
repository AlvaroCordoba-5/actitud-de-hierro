import React from 'react';
import Portadas from '../Portadas/Portadas';
import Footer from '../Footer/Footer';
import imgsobre from '../imagenes/sobrenosotros.png'

function SobreNosotros() {
  return (
    <>
    <Portadas
    image={imgsobre}
    texto='SOBRE NOSOTROS'
    />
    <Footer/>
    </>
  )
}

export default SobreNosotros