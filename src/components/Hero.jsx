import React from 'react'
import '../styles/Hero.css'

function Hero() {
    return (
        <div id="home">
            <section className="hero">
                <h1>We craft majestic web experiences</h1>
                <span>Where Vision Meets Digital Excellence</span>
                <p>Exceptional design is within reach. We create custom websites that bring your brand's unique story to life and drive meaningful business growth.</p>
                <div className="hero-buttons">
                    <a href="#portfolio">View Our Work</a>
                    <a href="#contact">Start Your Project</a>
                </div>
            </section>
            <img src="/images/frame.jpg" alt="Hands holding a crown" />
        </div>
    );
}

export default Hero;