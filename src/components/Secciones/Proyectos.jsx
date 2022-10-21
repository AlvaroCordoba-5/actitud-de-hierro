import React from 'react';
import Portadas from '../Portadas/Portadas';
import imgproyectos from '../imagenes/proyectos.png'

function Proyectos() {
  return (
    <>
    <Portadas
    image={imgproyectos}
    texto='PROYECTOS'
    />
    </>
  )
}

export default Proyectos