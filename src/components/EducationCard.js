import React from "react";

const EducationCard = ({ edu, handleDisplay, selectedEducation }) => {
  return (
    <div className="col-md-5 mb-4" key={edu.id}>
      <div className="card h-100 shadow-sm">
        <img
          src={edu.icon}
          className="card-img-top"
          alt={edu.school}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title text-center"><strong>{edu.school}</strong></h5>
          <p className="card-text text-center">
            {edu.degree}
            <br />
            {edu.time}
          </p>
          <div className="hover-content">
            <button className="btn"
              onClick={() => handleDisplay(edu, !(selectedEducation && selectedEducation.id === edu.id))}>
              {selectedEducation && selectedEducation.id === edu.id ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;