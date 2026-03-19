import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/images/me.avif" alt="Dalilah - Web Developer" />
          </div>
          <div className="about-text">
            <h3>Hello, I'm Dalilah</h3>
            <p>
              I am a <strong>Frontend Developer</strong> and{" "}
              <strong>UI Designer</strong> dedicated to turning complex ideas
              into intuitive, functional websites. I specialize in building
              custom web experiences for creative spirits and bold brands.
            </p>
            <p>
              I focus on essential details like color, typography, and layout to
              perfectly translate a brand's vibe into a digital experience.
              Whether you need a brand new website or a redesign, I prioritize
              performance, accessibility, and clean code.
            </p>
            <div className="skills">
              <span className="skill-tag">HTML & CSS</span>
              <span className="skill-tag">JavaScript (ES6+)</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">UI/UX Design</span>
              <span className="skill-tag">Figma</span>
            </div>

            <a href="#contact" className="btn">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
