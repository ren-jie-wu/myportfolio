import React from "react";
import { MarkdownRenderer } from "./Helper";

const ProjectCard = ({ project, handleDisplay, selectedProject }) => {
  return (
    <div className="project-card-col" key={project.id}>
      <div className="card h-100 shadow-sm">
        <img
          src={project.icon}
          className="card-img-top"
          alt={project.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title text-center"><strong>{project.title}</strong></h5>
          <MarkdownRenderer markdownText={project.description} className="card-text" />
          <div className="hover-content">
            <div className="skills-container">
              {project.skills.map((skill, index) => (
                <span key={index} className="skill-pill">{skill}</span>
              ))}
            </div>
            <button className="btn"
              onClick={() => handleDisplay(project, !(selectedProject && selectedProject.id === project.id))}>
              {selectedProject && selectedProject.id === project.id ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;