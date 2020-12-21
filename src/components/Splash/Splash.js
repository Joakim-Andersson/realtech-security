import React from 'react'

import "./Splash.css"

import Logo from "../../assets/logo_transparent.png"


function Splash() {
    return (
        <div className="splash" >
            <p> Realtech security </p>
            <img src={Logo} alt="Realtech Security logo" />
        </div>
    )
}

export default Splash
