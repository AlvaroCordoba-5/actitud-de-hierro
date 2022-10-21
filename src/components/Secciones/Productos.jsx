import React from 'react';
import Portadas from '../Portadas/Portadas';
import imgproductos from '../imagenes/productos.png'

function Productos() {
  return (
    <>
    <Portadas
    image={imgproductos}
    texto='PRODUCTOS'
    />
    </>
  )
}

export default Productos