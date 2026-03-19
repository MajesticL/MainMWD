import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav id="nav">
        <div className="logo">
          <a href="https://www.majestywebmagic.com/">
            <span>Majesty Web Design</span>
            {/* <img
              src="/images/resizedLogo.png"
              alt="Majesty Web Design LLC Logo"
            /> */}
          </a>
        </div>

        <div className={`link-column ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-links" id="navLinks">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About Me
              </a>
            </li>
            <li>
              <a href="#services" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={toggleMenu}>
                Portfolio
              </a>
            </li>
          </ul>

          <a href="#contact" className="cta-button" onClick={toggleMenu}>
            Get In Contact
          </a>
        </div>

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          id="hamburger"
          onClick={toggleMenu}
          title="nav-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
