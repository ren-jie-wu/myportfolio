import React from "react";
import { GitHubIcon, YouTubeIcon } from "./Icons";
import { MarkdownRenderer } from "./Helper";

const ProjectDetails = ({ selectedProject, handleDisplay }) => {
  return (
    <div className="project-details">
      <div className="d-flex align-items-center">
        <button
          className="btn me-5"
          style={{ padding: "0px 0px" }}
          onClick={() => handleDisplay(null, false, true)}
        > ◁ Hide
        </button>
        <div className="d-flex align-items-center">
          <h3 className="mb-0 me-3">{selectedProject.title}</h3>
          <div className="d-flex gap-3">
            {selectedProject.github && (
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                &nbsp;repo
              </a>
            )}
            {selectedProject.youtube && (
              <a href={selectedProject.youtube} target="_blank" rel="noopener noreferrer">
                <YouTubeIcon />
                &nbsp;demo
              </a>
            )}
          </div>
        </div>
      </div>
      <MarkdownRenderer markdownText={"---\n"} />
      <MarkdownRenderer markdownText={selectedProject.summary} />
      <div className="d-flex gap-2 align-items-center">
        {selectedProject.skills.map((skill, index) => (
          <span key={index} className="badge bg-secondary">{skill}</span>
        ))}
      </div>
      <MarkdownRenderer markdownText={"---\n"} />
      <MarkdownRenderer markdownText={selectedProject.details} />
    </div>
  );
}

export default ProjectDetails;