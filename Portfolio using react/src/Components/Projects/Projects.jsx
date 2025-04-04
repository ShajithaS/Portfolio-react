import React from "react";
import "./Projects.css";

const projects = [{
    title: "Word Search Solver",
    technologies: "HTML, CSS, Javascript",
    description: "Implemented an efficient word search algorithm that highlights user-input words in a grid.",
    link: "https://shajithas.github.io/Word-Search/",
  },
  {
    title: "Project Management Dashboard",
    technologies: "MERN Stack (MongoDB, Express, React, Node.js)",
    description: "Developed a MERN stack project management system with task management, dynamic status updates, and a visual dashboard.",
    link: "https://project-management-dashboard-lake.vercel.app/",
  },
  {
    title: "Portfolio Website",
    technologies: "React.js",
    description: "A personal portfolio showcasing projects, skills, and experience.",
    link: "https://shajitha-portfolio-phi.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      <div className="projects-content">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
