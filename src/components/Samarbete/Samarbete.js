import React from 'react'
import altibox from "../../assets/partner-logos/altibox.png"
import fibnet from "../../assets/partner-logos/fibnet.png"
import globaltech from "../../assets/partner-logos/globaltech.png"
import netel from "../../assets/partner-logos/netel.jpg"
import telenor from "../../assets/partner-logos/telenor.png"

import "./Samarbete.css"


function Samarbete() {
    return (
        <section className="samarbete">
            <h2 >Samarbetspartners:</h2>
            <div className="samarbete__logos">
                <img src={telenor} alt="telenor logo" />
                <img src={netel} alt="netel logo" />
                <img src={altibox} alt="altibox logo" />
                <img src={fibnet} alt="fibernet logo" />
                <img src={globaltech} alt="globaltech logo" />

            </div>
        </section>
    )
}

export default Samarbete;
