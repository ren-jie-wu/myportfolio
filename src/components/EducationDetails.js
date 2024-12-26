import React from "react";
import { MarkdownRenderer } from "./Helper";

const EducationDetails = ({ selectedEducation, handleDisplay }) => {
  return (
    <div className="education-details">
      <button
        className="btn"
        style={{ padding: "0px 0px" }}
        onClick={() => handleDisplay(null, false, true)}
      > ◁ Hide
      </button>
      <h5 style={{ textAlign: "center" }}>{selectedEducation.school}</h5>
      <p style={{ textAlign: "center" }}>{selectedEducation.degree} | {selectedEducation.dept} | {selectedEducation.location} | {selectedEducation.time}</p>
      <div>
        <MarkdownRenderer markdownText={"---\n"} />
        <MarkdownRenderer markdownText={selectedEducation.gpa} />
        
      </div>
    </div>
  );
}

export default EducationDetails;