import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';


function Projects() {
    const projectList = [
        {
            id: 1,
            title: "Golden Crumb Bakery",
            description: "Simple 1-page bakery template with a menu.",
            image: "../images/bakery.png",
            link: "https://goldencrumb.netlify.app/",
            github: "https://github.com/MajesticL/bakery"
        },
        {
            id: 2,
            title: "Todo List",
            description: "Functional Todo List with a style toggle for dark and light mode. Keeps tasks as page is refreshed.",
            image: "../images/todo.png",
            link: "https://testingtodos.netlify.app/",
            github: "https://github.com/MajesticL/todo-list"
        },
        {
            id: 3,
            title: "Paw and Bubble",
            description: "Cute dog groomer template with a services, gallery,and testimonial section. Perfect foundation for your fuzzy friends.",
            image: "../images/paws.png",
            link: "https://pawandbubble.netlify.app/",
            github: "https://github.com/MajesticL/dog-groomer"
        }
        // {
        //     id: 1,
        //     title: ,
        //     description: ,
        //     image: "",
        //     link: "",
        //     github: ""
        // },
        
    ]
    return (
      <section id="portfolio" className="projects-section">
      <div className='projects-container'>
        <h2>My Recent Work</h2>
      
      <div className="projects-grid">
        {projectList.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
      </div>
      
    </section>
    );
}

export default Projects;