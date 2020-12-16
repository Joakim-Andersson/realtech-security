import React from 'react'
import Blogpost from "./Blogpost"

import "./Blogitem.css"


function Blogitem({ title, imageURL, text }) {
    return (
        <div className="blogitem-card" onClick={<Blogpost text={text} />}>
            <img src={imageURL} className="blogitem-bild" alt="blogitem" />
            <div className="blogitem-text">
                <p className="blogitem-title">{title}</p>
                <button> Läs mer </button>
            </div>
        </div>
    )
}

export default Blogitem


