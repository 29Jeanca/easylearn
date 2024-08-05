import "../styles/global-styles.css";
import { changeTheme } from "../extras/darkMode";
import { useState } from "react";

const NavBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <h3>Learn English</h3>
                <button
                    className="navbar-toggler cont-button-navbar"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNav"
                    aria-expanded={!isCollapsed}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed ? 'collapse' : 'show'}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link links-navbar" href="/easylearn">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link links-navbar" href="#modulos">Modulos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link links-navbar" href="#recursos">Recursos adicionales</a>
                        </li>
                        <li className="nav-item">
                            <i className="nav-link links-navbar bi bi-sun-fill" onClick={changeTheme}></i>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
