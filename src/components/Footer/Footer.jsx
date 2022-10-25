import React from 'react'
import Columna from './columna'
import Tiktok from '../imagenes/tik-tok.svg'

function Footer() {
  return (
    <>
    <div className='footer'>
<Columna

titulo='Productos'
texto1='Pergolas'
texto2='Entrepisos de hierro y madera'
texto3='Portones corrediza manual y automatizado'
texto4='Portones de dos hojas'
texto5='Puerta medidas estandar y medias'
texto6='Ventanas clasicas y con diseños'
texto7='Ver mas...'
/>

<Columna
titulo='Contacto'
texto1='11 2345-6789'
texto2='actituddehierro@gmail.com'
texto3='Pilar,Buenos Aires'
/>

<Columna
titulo='Mapa del sitio'
texto1='Inicio'
texto2='Proyectos'
texto3='Productos'
texto4='Sobre nosotros'
texto5='Contacto'
/>

<Columna
titulo='Legal'
texto1='Politica de privacidad'
texto2='Terminos y condiciones de uso'
texto3='Cookies'
/>

<div className="columna">
      <h1>Redes sociales</h1>
      <ul className='redes'>
        <li><img  style={{width:'1em',color:'white'}} src={Tiktok}/></li>
        <li>'HOLA'</li>
        <li>'HOLA'</li>
        </ul>
    </div>
    </div>
    
    </>
  )
}

export default Footer