import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experience } from "./Helper";

const Experience = ({ handleDisplay, selectedExperience }) => {
  return (
    <div className="experience-section py-5">
      <h2 className="text-center mb-4">Experience</h2>

      <div style={{ height: "16px" }} />
      
      <div className="container">
        <div className="experience-grid-wrap">
          <div className="experience-grid">
            {experience.map((edu) => (
              <ExperienceCard
                key={edu.id}
                edu={edu}
                handleDisplay={handleDisplay}
                selectedExperience={selectedExperience}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;