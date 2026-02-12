import React from 'react'

function ProjectCard(props) {
    return (
        <div className="project-card">
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.link}>View Project</a>
        </div>
    );
}

export default ProjectCard;