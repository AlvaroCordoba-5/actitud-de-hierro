import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'


function NavbarClose({ handleclick }) {
    return (
        <>
            <button
                style={{ background: "#434343", border: "none" }}
                onClick={handleclick}
            >
                <IoCloseSharp color='white' size='2.5em' />
            </button>


        </>
    )
}

export default NavbarClose