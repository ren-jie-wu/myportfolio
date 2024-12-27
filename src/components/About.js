import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { name, positions, introduction, profilePic, cvLink, MarkdownRenderer } from "./Helper";

const About = () => {
  return (
    <div className="about-section">
      <div className="text-center mb-4">
        <img
          src={profilePic}
          alt={name.full}
          className="rounded-circle"
          style={{ width: "250px", height: "250px", objectFit: "cover" }}
        />
      </div>
      <div className="d-flex">
        <h1 style={{ fontWeight: "bold" }}>
          Hi there, I'm {name.first} 👋🏼
        </h1>
        <div className="ms-auto my-auto">
          <a
            href={cvLink}
            className="btn border-primary text-primary"
            rel="noopener noreferrer"
            target="_blank"
          >
            View CV
          </a>
        </div>
      </div>
      <h3 style={{ fontWeight: "bold", color: "#666" }}>
        {positions}
      </h3>
      <MarkdownRenderer
        className="text-left"
        markdownText={introduction}
      />
    </div>
  );
};

export default About;