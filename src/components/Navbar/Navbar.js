import React from "react";
import { NavLink } from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <nav className="navbar__list">
          <div className="navbar__list-item">
            {/*Если довабить exact то нельзя бдуте /profile/id*/}
            <NavLink to="/profile" className="navbar__list-link">
             Profile
            </NavLink>
          </div>
          <div className="navbar__list-item">
            <NavLink to="/dialogs" className="navbar__list-link">
             Messages
            </NavLink>
          </div>
          <div className="navbar__list-item">
            <a href="/" className="navbar__list-link">
             News
            </a>
          </div>
          <div className="navbar__list-item">
            <a href="/" className="navbar__list-link">
             Music
            </a>
          </div>
        </nav>
        <div className="navbar__settings">
          <p className="navbar__settings-text">Settings</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar;