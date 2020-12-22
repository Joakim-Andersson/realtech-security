import { React, useState } from "react";
import PhoneIcon from "@material-ui/icons/Phone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import { FaTimes } from "react-icons/fa"

import "./Blurb.css"


const style = {
    color: 'white',
    padding: '2px',
}

function Blurb() {

    const [clicked, setClicked] = useState(false);

    const clickContactInfo = () => {
        setClicked(!clicked)
    }

    return (
        <>
            {!clicked ? (
                <div className="sidenav" onClick={() => clickContactInfo()}>
                    <div className="phoneElement">
                        <PhoneIcon style={style} fontSize="large" className="phoneIcon" />
                        {/* <p className="phoneText"> Phone: 12345 </p> */}
                    </div>

                    <div className="mailElement">
                        <MailOutlineIcon style={style} fontSize="large" className="mailIcon" />
                        {/* <p className="mailText"> Email: Real-tech@mail.com </p> */}
                    </div>
                </div>
            ) : (
                    <section className="blurb__active" onClick={() => clickContactInfo()}>
                        <div classNAme="exitElement__active">
                            <FaTimes style={style} fontSize="large"/>
                        </div>
                        <div>
                            <div className="sidenav__active" >
                                <div className="phoneElement__active">
                                    <PhoneIcon style={style} fontSize="large" className="phoneIcon__active" />
                                    <a href="tel:+46701915116"> +46 70-19 15 116</a>
                                </div>

                                <div className="mailElement__active">
                                    <MailOutlineIcon style={style} fontSize="large" className="mailIcon__active" />
                                    <a class="mailto" href="kontakt@realtech.se"> kontakt@realtech.se</a>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default Blurb
