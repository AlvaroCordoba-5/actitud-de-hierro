import React from 'react'
import "./navbar.css";

function navbarResponsive({handleclick}) {
  return (
    <>
    <button 
    onClick={handleclick}
    className='button-navbar'>
        <div></div>
        <div></div>
        <div></div>
    </button>
    
    
    </>
  )
}

export default navbarResponsive