import { NavLink } from "react-router-dom";
import classes from "./DashNav.module.css";

const DashNav = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${classes.navPad}`}>
      <div className="container">
        <a className={`${classes.swizzNav} navbar-brand`} href="/dashboard">
          SWIZZ
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <NavLink
                to="/dashboard"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "rgb(177, 64, 23)",
                      }
                    : { color: "#363636" }
                }
              >
                <i className="fa-solid fa-house"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "rgb(177, 64, 23)",
                      }
                    : { color: "#363636" }
                }
              >
                <i className="fa-solid fa-circle-info"></i> About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "rgb(177, 64, 23)",
                      }
                    : { color: "#363636" }
                }
              >
                <i className="fa-solid fa-wifi"></i> E-Banking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "rgb(177, 64, 23)",
                      }
                    : { color: "#363636" }
                }
              >
                <i className="fa-solid fa-comments"></i> Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashNav;
