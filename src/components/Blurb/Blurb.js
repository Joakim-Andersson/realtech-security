import { React } from "react";
// import { React, useState, useEffect } from "react";
import PhoneIcon from "@material-ui/icons/Phone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"

import "./Blurb.css"


const style = {
    color: 'white',
    padding: '2px',
}

function Blurb() {

    // const [clickedPhone, setClickedPhone] = useState(false);
    // const [clickedMail, setClickedMail] = useState(false);


    return (
        <div className="sidenav" >
                    <div className="phoneElement">
                        <PhoneIcon style={style} fontSize="large" className="phoneIcon" />
                        {/* <p className="phoneText"> Phone: 12345 </p> */}
                    </div>

                    <div className="mailElement">
                        <MailOutlineIcon style={style} fontSize="large" className="mailIcon" />
                        {/* <p className="mailText"> Email: Real-tech@mail.com </p> */}
                    </div>
            </div>
    )
}

export default Blurb
