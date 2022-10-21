import React from 'react';
import Portadas from '../Portadas/Portadas';
import imgsobre from '../imagenes/sobrenosotros.png'

function SobreNosotros() {
  return (
    <>
    <Portadas
    image={imgsobre}
    texto='SOBRE NOSOTROS'
    />
    </>
  )
}

export default SobreNosotros