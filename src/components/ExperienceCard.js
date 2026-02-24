import React from "react";

const ExperienceCard = ({ edu, handleDisplay, selectedExperience }) => {
  return (
    <div className="experience-card-col" key={edu.id}>
      <div className="card anim-card h-100 shadow-sm">
        <img
          src={edu.icon}
          className="card-img-top"
          alt={edu.org}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title text-center"><strong>{edu.org}</strong></h5>
          <p className="card-text text-center">
            {edu.role}
            <br />
            {edu.time}
          </p>
          <div className="hover-content">
            <button className="btn"
              onClick={() => handleDisplay(edu, !(selectedExperience && selectedExperience.id === edu.id))}>
              {selectedExperience && selectedExperience.id === edu.id ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;