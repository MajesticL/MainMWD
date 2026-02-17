import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard(props) {
    return (
        <div className="project-card">
            <div className="project-image-container">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="project-info">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div className="project-links">
                    <a href={props.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                        View Site
                    </a>
                    <a href={props.github} target="_blank" rel="noopener noreferrer" className="project-btn">
                        View Github
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;