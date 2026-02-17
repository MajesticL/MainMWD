import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2>About Me</h2>
                <div className="about-content">
                    <div className="about-image">
                        <img src="/images/me.avif" alt="Profile" />
                    </div>
                    <div className="about-text">
                        <h3>Hello!, I'm Dalilah</h3>
                        <p>
                            I am a passionate web developer dedicated to turning your ideas into reality. 
                            I craft custom websites for creative spirits and bold brands. I love color, typography, and the challenge of translating a brand's vibe into a digital experience.
                        </p>
                        <p>
                            Whether you need a brand new website or a redesign of an existing one, 
                            I am here to help you achieve your digital goals.
                        </p>
                        <div className="skills">
                            <span className="skill-tag">HTML & CSS</span>
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">React</span>
                            <span className="skill-tag">Web Design</span>
                            <span className="skill-tag">Figma</span>
                        </div>

                        <a href="#contact" className="btn">Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;