import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../../assets/logo.png";
import "./NavBar.css";

const NavBar = (props) => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const idcliente = props.id;

    return (
        <>
            <IconContext.Provider value={{ color: "#324b77" }}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link
                            to="/"
                            className="logo"
                            onClick={closeMobileMenu}
                        >
                            <img src={logo} alt="loco" />
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Recorridos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Puntos de interes
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Preguntas frecuentes
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default NavBar;