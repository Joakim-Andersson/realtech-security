import React from 'react'
import Samarbete from "../Samarbete/Samarbete"


import PhoneIcon from '@material-ui/icons/Phone';
import Camera from "../../assets/Camera.jpg"

import "./Main.css"

function Main() {
    return (
        <div>
            <section className="header">
                <img className="header_image" src={Camera} alt="Realtech Security logo" />
                <div className="header__text">
                    <h1> Vi tar oss an hela Norden</h1>
                    <h3> <PhoneIcon fontSize="large" /> +46 70-19 15 116 </h3>
                    <button>Få gratis kostnadsförslag</button>
                </div>
            </section>
            <Samarbete />
        </div>
    )
}

export default Main


