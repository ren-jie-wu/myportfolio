// ProjectDetails.js
import React from "react";
import { GitHubIcon, YouTubeIcon } from "./Icons";
import { MarkdownRenderer } from "./Helper";

const ProjectDetails = ({ selectedProject, handleDisplay }) => {
  return (
    <div className="project-details">
      {/* Header */}
      <div className="project-details-header d-flex align-items-center justify-content-between">
        <button
          className="btn btn-sm"
          style={{ padding: "0px 0px" }}
          onClick={() => handleDisplay(null, false, true)}
        >
          ◁ Back
        </button>

        <h3 className="mb-0">{selectedProject.title}</h3>

        <div className="d-flex align-items-center gap-4">
          {selectedProject.github && (
            <a
              className="project-link"
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              &nbsp;repo
            </a>
          )}
          {selectedProject.youtube && (
            <a
              className="project-link"
              href={selectedProject.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon />
              &nbsp;demo
            </a>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="project-details-tags d-flex flex-wrap gap-2 justify-content-center">
        {selectedProject.skills.map((skill, index) => (
          <span key={index} className="badge bg-secondary">
            {skill}
          </span>
        ))}
      </div>

      {/* Hero image */}
      <div className="project-hero">
        <img src={selectedProject.hero} alt={`${selectedProject.title} hero`} />
      </div>

      {/* Summary card */}
      <div className="project-summary-card card shadow-sm">
        <div className="card-body">
          <div className="summary-title">Summary</div>
          <MarkdownRenderer markdownText={selectedProject.summary} />
        </div>
      </div>

      {/* Body */}
      <div className="project-body">
        <MarkdownRenderer markdownText={selectedProject.details} />
      </div>
    </div>
  );
};

export default ProjectDetails;