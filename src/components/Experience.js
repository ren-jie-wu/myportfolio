import React from "react";
import EducationCard from "./EducationCard";
import { education } from "./Helper";

const Experience = ({ handleDisplay, selectedEducation }) => {
  return (
    <div className="experience-section py-5">
      <h2 className="text-center mb-4">Experience</h2>
      <div className="container">
        <div className="row justify-content-center">
          {education.map((edu) => (
            <EducationCard
              key={edu.id}
              edu={edu}
              handleDisplay={handleDisplay}
              selectedEducation={selectedEducation}
            />
          ))}
          {/* work experience cards */}
        </div>
      </div>
    </div>
  );
};

export default Experience;