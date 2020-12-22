import React from "react"
import electrician from "../../assets/pexels-pixabay-257736 (1).jpg"

import "./About.css"

function About() {
    return (
        <section className="about">
            <img src={electrician} alt="Realtech Security electrician" />
            <div className="about__text">
                <h3>Om oss</h3>
                <p>
                    Våra tekniker på Realtech Security dyker upp med kort varsel och utför alla typer av eluppdrag i Norden.
                    Du kan förvänta dig hög professionell kompetens, god kommunikation och tillförlitlighet från våra elektriker.
                </p>
                <p>
                    Vi arbetar nära andra hantverksgrupper för att säkerställa våra kunder hög kvalitet till rätt pris och tid.
                    Vi felsöker, justerar och underhåller elektriska system och Smarta Hem.
                </p>
            </div>
            <div className="about__text">
                <h2>Tidigare projekt:</h2>
                <h1>Oslo</h1>
                <p>
                    Installation av Fiber.
                </p>
                <h1>Trondheim</h1>
                <p>
                    Fullt Smart-hem paket på helt hyreshus.
                </p>
                <h1>Göteborg</h1>
                <p>
                    Brandlarm på skola.
                </p>
            </div>
        </section>
    )
}

export default About