import React from 'react'
import { Link } from "react-router-dom"

import "./Nav.css"

import Logo from "../../assets/logo_transparent.png"


function Nav() {
    return (
        <nav className="navbar">
            <div className="navbar__logo" >
                <Link to={`/`}>
                    <img src={Logo} alt="Realtech Security logo" />
                </Link>
            </div>
            <ul className="navbar__ul">
                <li className="navbar__item">
                    <Link to="/">Hem</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/produkter">Produkter</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/om-oss">Om oss</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
