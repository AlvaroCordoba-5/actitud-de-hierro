import React from 'react';
import Columna from './columna';
import Tiktok from '../imagenes/tik-tok.svg';
import { BsWhatsapp } from "react-icons/bs";
import { BiAt } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import './Footer.css'



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

/>

<div className="columna">
      <h1>Contacto</h1>
      <ul>
        
        <li><BsWhatsapp size='1em' style={{marginRight:'0.5em'}}/>123456789</li>
        <li><BiAt size='1.2em' style={{marginRight:'0.5em'}}/>actituddehierro@gmail.com</li>
        <li><IoLocationOutline size='1.2em' style={{marginRight:'0.5em'}}/>Pilar, Buenos Aires</li>
        
      </ul>
    </div>

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
        <li><img  style={{width:'1em',background:'white',color:'white'}} src={Tiktok}/></li>
        <li>'HOLA'</li>
        <li>'HOLA'</li>
        </ul>
    </div>
    </div>
    
    </>
  )
}

export default Footer