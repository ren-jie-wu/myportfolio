import React from "react";

const ProjectDetails = ({ selectedProject, handleDisplay }) => {
  return (
    <div className="project-details">
      <button
        className="btn"
        style={{ padding: "0px 0px" }}
        onClick={() => handleDisplay(null, false, true)}
      > ◁ Hide
      </button>
      <h3>{selectedProject.title}</h3>
      <p>{selectedProject.description}</p>
      <p>{selectedProject.details}</p>
    </div>
  );
}

export default ProjectDetails;