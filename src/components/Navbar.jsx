import React from 'react'

function Navbar() {
    return (
        <div>
            <header>
        <nav id="nav">
            <div class="logo">
                <a href="https://www.majestywebmagic.com/">
                <span>Majesty Web Design</span>
                <img src="/images/resizedLogo.png" alt="Majesty Web Design LLC Logo" />
                </a>
            </div>
            
            <ul class="nav-links" id="navLinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about">About Me</a></li>
            </ul>
            <a href="#contact" class="cta-button">Get In Contact</a>
            <button class="hamburger" id="hamburger" onclick="console.log('Button clicked'); toggleMenu();" title="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    </header>
        </div>
    );
}

export default Navbar;