import React from 'react';
import s1 from '../imagenes/slider1.jpg';
import s2 from '../imagenes/slider2.jpg';
import s3 from '../imagenes/slider3.jpg';

import './galeriaSlider.css'

function galeriaSlider() {
  return (
    <>
    <div className="proyectos">
<h1
         
        >
          Nuestro Proyectos
        </h1>

        
<div className='container-slider'>
    <div className='slider-card'>
        <img
              src={s1}
              alt="trabajos particulares"
            />
            
        </div>
        <div className='slider-card'>
        <img
              src={s2}
              alt="trabajos particulares"
            />
            
        </div>
        <div className='slider-card'>
        <img
              src={s3}
              alt="trabajos particulares"
            />
            
        </div>
</div>
</div>
</>
  )
}

export default galeriaSlider