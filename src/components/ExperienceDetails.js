import React from "react";
import { MarkdownRenderer } from "./Helper";

const ExperienceDetails = ({ selectedExperience, handleDisplay }) => {
  return (
    <div className="experience-details">
      {/* Header */}
      <div className="experience-details-header d-flex align-items-center justify-content-between">
        <button className="btn btn-sm" onClick={() => handleDisplay(null, false, true)}>
          ◁ Back
        </button>

        <h3 className="mb-0">{selectedExperience.org}</h3>

        <div className="text-muted">{selectedExperience.time}</div>
      </div>

      {/* Meta */}
      <div className="mt-3 mb-2 fw text-center">
        {`${selectedExperience.role} · ${selectedExperience.dept} · ${selectedExperience.location}`}
      </div>

      {/* Summary card */}
      <div className="experience-summary-card card shadow-sm">
        <div className="card-body">
          <div className="experience-summary-grid">
            <div>
              <div className="summary-title">Focus</div>
              <MarkdownRenderer markdownText={selectedExperience.focus} />
            </div>
            <div>
              <div className="summary-title">Skills</div>
              <MarkdownRenderer markdownText={selectedExperience.skills} />
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="experience-body mt-4">
        <MarkdownRenderer markdownText={selectedExperience.details} />
      </div>
    </div>
  );
}

export default ExperienceDetails;