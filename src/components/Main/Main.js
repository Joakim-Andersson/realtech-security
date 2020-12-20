import React from 'react'
import Samarbete from "../Samarbete/Samarbete"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Jumbotron, Button } from 'reactstrap';

import PhoneIcon from '@material-ui/icons/Phone';
import Camera from "../../assets/Camera.jpg"

import "./Main.css"

const divStyle = {
    color: "white",
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
    fontWeight: '800',
    padding: '20px',
    margin: '0px',
};

const jumboStyle = {
    padding: '0px',
    margin: '0px',
    backgroundImage: `url(${Camera})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: 'auto',
};

const buttonStyle = {
    marginBottom: '20px',
};

function Main() {
    return (
        <>
            <Jumbotron style={jumboStyle}>
                <div style={divStyle}>
                    <h1 style={divStyle} className="display-3">Söker du elektriker?</h1>
                    <p className="lead">Vi tar oss an hela Norden!</p>
                    <p><PhoneIcon fontSize="large" /> +46 70-19 15 116 </p>
                    <p className="lead">
                        <Button style={buttonStyle} color="primary">Få gratis kostnadsförslag</Button>
                    </p>
                </div>
            </Jumbotron>
            <Samarbete className="samarbete" />
        </>
    )
}

export default Main


