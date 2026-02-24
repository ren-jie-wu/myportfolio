import React, { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./Helper";

const Projects = ({ handleDisplay, selectedProject }) => {
  const [activeFilter, setActiveFilter] = useState("featured");

  // automatically extract all tags (remove duplicates and sort)
  const tagOptions = useMemo(() => {
    const s = new Set();
    projects.forEach((p) => (p.tags || []).forEach((t) => s.add(t)));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    if (activeFilter === "featured") return projects.filter((p) => p.featured);
    // other cases: filter by tag
    return projects.filter((p) => (p.tags || []).includes(activeFilter));
  }, [activeFilter]);

  const FilterPill = ({ value, label }) => {
    const isActive = activeFilter === value;
    return (
      <button
        type="button"
        className={`btn btn-sm rounded-pill px-3 ${
          isActive ? "btn-dark" : "btn-outline-dark"
        }`}
        onClick={() => setActiveFilter(value)}
        style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
      >
        {label}
      </button>
    );
  };

  const filters = [
    { value: "all", label: "All" },
    { value: "featured", label: "Featured" },
    ...tagOptions.map((t) => ({
      value: t,
      label: t,
    })),
  ];

  return (
    <div className="projects-section py-5">
      <h2 className="text-center mb-4">Projects</h2>

      <div style={{ height: "16px" }} />

      {/* filter bar */}
      <div className="container mb-4">
        <div className="d-flex flex-wrap justify-content-center">
          {filters.map((f) => (
            <FilterPill key={f.value} value={f.value} label={f.label} />
          ))}
        </div>
      </div>

      <div style={{ height: "16px" }} />

      {/* projects gallery */}
      <div className="container">
        <div className="projects-grid-wrap">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                handleDisplay={handleDisplay}
                selectedProject={selectedProject}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;