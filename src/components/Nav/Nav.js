import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

import "./Nav.css"

import Logo from "../../assets/logo_transparent.png"


function Nav() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__logo" >
                    <Link to={`/`}>
                        <img src={Logo} alt="Realtech Security logo" />
                    </Link>
                </div>
                <ul
                    className={`nav__menu ${click && "nav_menu active"}`}
                    onClick={handleClick}
                    role="presentation"
                >
                    <li className="nav__item">
                        <Link to="/">Hem</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/produkter">Produkter</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/om-oss">Om oss</Link>
                    </li>
                </ul>
                <div className="mobile__icon" onClick={handleClick} role="presentation">
                    {click ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    )
}

export default Nav