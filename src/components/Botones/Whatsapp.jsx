import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import './Boton.css'

function Whatsapp() {
  return (
    <>
    <div className='container-whatsapp'>
    <a style={{textDecoration:'none'}} href='https://wa.me/+5491125069028?text=Hola, quiero cotizar mi proyecto!' target={'_blank'}>
        <BsWhatsapp className='whatsapp' size={'70px'}></BsWhatsapp>
       
    </a>
        </div>
    </>
  )
}

export default Whatsapp