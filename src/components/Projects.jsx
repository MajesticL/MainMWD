import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

import bakeryImg from "../images/bakery.avif";
import todoImg from "../images/todo.avif";
import pawsImg from "../images/paws.avif";

function Projects() {
  const projectList = [
    {
      id: 1,
      title: "Golden Crumb Bakery",
      description:
        "A responsive, single-page bakery website featuring an interactive menu and elegant UI design optimized for user engagement.",
      image: bakeryImg,
      link: "https://goldencrumb.netlify.app/",
      github: "https://github.com/MajesticL/bakery",
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    },
    {
      id: 2,
      title: "Task Master (Todo List)",
      description:
        "A dynamic task manager featuring Dark/Light mode toggling and LocalStorage integration for data persistence across sessions.",
      image: todoImg,
      link: "https://testingtodos.netlify.app/",
      github: "https://github.com/MajesticL/todo-list",
      techStack: ["React", "CSS Modules", "LocalStorage", "State Management"],
    },
    {
      id: 3,
      title: "Paw and Bubble Groomers",
      description:
        "A comprehensive business landing page with service listings, a photo gallery, and a testimonial section to drive client conversions.",
      image: pawsImg,
      link: "https://pawandbubble.netlify.app/",
      github: "https://github.com/MajesticL/dog-groomer",
      techStack: ["HTML5", "CSS Grid", "Flexbox", "Responsive Design"],
    },
  ];

  return (
    <section id="portfolio" className="projects-section">
      <div className="projects-container">
        <h2>My Recent Work</h2>
        <p className="projects-subtitle">
          A selection of projects I've brought to life.
        </p>

        <div className="projects-grid">
          {projectList.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              github={project.github}
              techStack={project.techStack} // Pass the stack!
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
