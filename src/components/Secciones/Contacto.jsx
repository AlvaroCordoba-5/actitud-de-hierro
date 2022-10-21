import React from 'react';
import Portadas from '../Portadas/Portadas';
import imgcontacto from '../imagenes/contacto.png'

function Contacto() {
  return (
    <>
    <Portadas
    image={imgcontacto}
    texto='CONTACTO'
    />
    </>
  )
}

export default Contacto