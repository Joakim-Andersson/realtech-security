import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

import "./Nav.css"

import Logo from "../../assets/logo_transparent.png"


function Nav() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => setClicked(!clicked)

    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__logo" >
                    <Link to={`/`}>
                        <img src={Logo} alt="Realtech Security logo" />
                    </Link>
                    <p>Realtech Security</p>
                </div>
                {clicked ? (
                    <>
                        <ul
                            className="nav__menu-active"
                            role="presentation"
                            onClick={handleClick}
                        >
                            <div className="nav__logo--hamburger" >
                                <Link to={`/`}>
                                    <img className="nav__logo--hamburger--img" src={Logo} alt="Realtech Security logo" />
                                </Link>
                            </div>
                            <li className="nav__item">
                                <Link to="/">Hem</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/produkter">Produkter</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/kontakt">Ta kontakt</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/blog">blogg</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/om-oss">Om oss</Link>
                            </li>
                        </ul>
                        <div className="mobile__icon" onClick={handleClick} role="presentation">
                            {clicked ? <FaTimes /> : <FaBars />}
                        </div>
                    </>
                ) : (
                        <>
                            <ul
                                className="nav__menu"
                                role="presentation"
                            >
                                <li className="nav__item">
                                    <Link to="/">Hem</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/produkter">Produkter</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/blog">blogg</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/om-oss">Om oss</Link>
                                </li>
                            </ul>
                            <div className="mobile__icon" onClick={handleClick} role="presentation">
                                {clicked ? <FaTimes /> : <FaBars />}
                            </div>
                        </>
                    )
                }

            </div>
        </nav>
    )
}

export default Nav