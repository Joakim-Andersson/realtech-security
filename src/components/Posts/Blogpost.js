import React from 'react'

function Blogpost({text, imageURL, title}) {
    return (
        <section className="blogpst-section">
            <img src={imageURL} className="blogpost-bild" alt="blogitem" />
            <div className="blogpost-text">
                <p className="blogpost-title">{title}</p>
                <p className="blogpost-text">{text}</p>
            </div>
        </section>
    )
}

export default Blogpost
