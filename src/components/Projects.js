import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./Helper";

const Projects = ({ handleDisplay, selectedProject }) => {
  return (
    <div className="projects-section bg-white py-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="container">
        <div className="row justify-content-center">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              handleDisplay={handleDisplay}
              selectedProject={selectedProject}
            />
          ))}
        </div>
      </div>
      <div className="text-center mt-3">
        <a
          href="/#/otherprojects"
          className="text-blue-600 hover:underline"
        >View More Projects →
        </a>
      </div>
    </div>
  );
};

export default Projects;