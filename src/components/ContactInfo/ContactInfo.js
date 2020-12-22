import React from "react"
import PhoneIcon from "@material-ui/icons/Phone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"

import "./ContactInfo.css"

function Contact() {
    return (
        <section className="contact">
            <h3>
                Kontakta oss
            </h3>
            <p>
                Vill du komma i kontakt med oss på RealTech så går det bra att kontakta oss via telefon, e-post eller brev.
                Vår kundtjänst har öppet måndag till fredag 9.00-16.30!
            </p>
            <PhoneIcon />
            <h2>
                Telefonnummer: +46 70-19 15 116
            </h2>

            <MailOutlineIcon />
            <h2>
                Email: kontakt@realtech.se
            </h2>
            <p>

                Postadress
                RealTech Security AS
                Gata 123 A
                123 45 Stockholm

                If you have any questions, please get in contact with us, or with your doctor for more
                information on how to join this platform.
                </p>

        </section>
    )
}

export default Contact