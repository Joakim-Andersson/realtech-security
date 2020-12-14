import React from 'react'
import Samarbete from "../Samarbete/Samarbete"


import PhoneIcon from '@material-ui/icons/Phone';
import Camera from "../../assets/Camera.jpg"

import "./Main.css"

function Main() {
    return (
        <div>
            <section className="header">
                <img src={Camera} alt="Realtech Security logo" />
                <div className="header__text">
                <h1> Vi tar oss an hela Norden</h1>
                <h3> <PhoneIcon fontSize="large" /> +46 070-19 15 116 </h3>
                </div>
            </section>
            <Samarbete />
        </div>
    )
}

export default Main
