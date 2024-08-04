import "../styles/global-styles.css";
import { changeTheme } from "../extras/darkMode";
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <h3>Learn English</h3>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link links-navbar" href="#inicio">Inicio</a>
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
        </nav>
    );
}

export default NavBar;
