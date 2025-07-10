import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { assests } from "../assets/assests.js";
import "./Navbar.css";

const Navbar = () => {
  const ref = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Ds-InterConnect</h1>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Service">Service</NavLink>
        <NavLink to="/faq">Faq</NavLink>
        <NavLink to="/Contact">
        <button className="course-btn">Contact Us</button>
      </NavLink>
      </div>

      <div className="menu-icon">
        <img
          src={assests.menu_icon}
          alt="Menu_icon"
          className="menu-img"
          onClick={handleMenu}
        />
      </div>

      <div className={`mobile-nav-links ${isMenuOpen ? "open" : ""}`}>
        <div className="cross-icon">
          <img
            src={assests.cross_icon}
            alt="Close"
            className="close-btn"
            onClick={handleMenu}
            style={{ background: "black" }}
          />
        </div>
        <NavLink to="/" onClick={handleMenu}>
        <button className="course-btn">Home</button>
        </NavLink>

        <NavLink to="/About" onClick={handleMenu}>
        <button className="course-btn">About</button>
        </NavLink>
        <NavLink to="/Service" onClick={handleMenu}>
        <button className="course-btn">Service</button>
        </NavLink>
        <NavLink to="/faq" onClick={handleMenu}>
        <button className="course-btn">Faq</button>
        </NavLink>
        <NavLink to='/Contact' onClick={handleMenu}>
        <button className="course-btn">Contact Us</button> 
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
