import React from 'react';
import Portadas from '../Portadas/Portadas';
import imgproductos from '../imagenes/productos.png'
import Products from '../Products/Products'

function Productos() {
  return (
    <>
    <Portadas
    image={imgproductos}
    texto='PRODUCTOS'
    />
    <Products/>
    </>
  )
}

export default Productos