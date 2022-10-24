import React from 'react';
import Portadas from '../Portadas/Portadas';
import imgcontacto from '../imagenes/contacto.png'
import Formulario from '../Formulario/Formulario';

function Contacto() {
  return (
    <>
    <Portadas
    image={imgcontacto}
    texto='CONTACTO'
    />
    <Formulario/>
    </>
  )
}

export default Contacto