import React from 'react'
import Samarbete from "../Samarbete/Samarbete"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Jumbotron, Button } from 'reactstrap';

import Camera from "../../assets/Camera.jpg"

import "./Main.css"

const style = {
    divStyle: {
        color: "white",
        textShadowColor: 'black',
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 10,
        fontWeight: '800',
        padding: '10px',
        margin: '0px',
        maxWidth: '400px',
    },

    jumboStyle: {
        padding: '20px',
        margin: '0px',
        backgroundImage: `url(${Camera}`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },

    buttonStyle: {
        marginBottom: '20px',
    }
};

function Main() {
    return (
        <>
            <Jumbotron style={style.jumboStyle}>
                <div style={style.divStyle}>
                    <h1 style={style.divStyle} className="display-3">SMARTA HEM & SÄKERHET!</h1>
                    <p className="lead">Vi tar oss an hela Norden!</p>
                    <p className="lead">
                        <Button style={style.buttonStyle} color="primary">Få gratis kostnadsförslag</Button>
                    </p>
                </div>
            </Jumbotron>
            <Samarbete className="samarbete" />
        </>
    )
}

export default Main


