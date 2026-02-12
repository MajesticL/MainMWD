import React, { useState } from 'react';

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
                        <img src="/images/resizedLogo.png" alt="Majesty Web Design LLC Logo" />
                    </a>
                </div>
                
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Me</a></li>
                </ul>
                
                <a href="#contact" className="cta-button">Get In Contact</a>
                
                <button 
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
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