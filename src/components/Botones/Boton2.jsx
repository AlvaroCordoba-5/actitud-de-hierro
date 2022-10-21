import React from 'react'
import './Boton.css'

function Boton2({img,texto}) {
  return (
    <>
    <div className="button secundario">
        <h2 style={{marginRight:'30px'}}>
        {img}
        </h2>
      <h2>
        {texto}
      </h2>
    </div>
  </>
  )
}

export default Boton2