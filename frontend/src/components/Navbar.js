import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">

      <h2 className="logo">AG</h2>

      {/* HAMBURGER ICON */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* MENU */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
        <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
        <li><a href="#contact" className="contact-btn" onClick={() => setMenuOpen(false)}>Contact</a></li>

      </ul>

    </nav>
  );
};

export default Navbar;