import React from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ image, title, description, techStack, link, github }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={title} />
        <div className="image-overlay">
          <h3>{title}</h3>
        </div>
      </div>

      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="tech-stack">
          {techStack &&
            techStack.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
        </div>

        <div className="project-links">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn primary-btn"
            >
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn secondary-btn"
            >
              <i className="fab fa-github"></i> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
