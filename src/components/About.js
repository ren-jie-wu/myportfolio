import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { name, subheadline, introduction, profilePic, cvLink, MarkdownRenderer } from "./Helper";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-inner">
        {/* top: name and resume button, subheadline, avatar */}
        <div className="row align-items-center g-4">
          {/* top left */}
          <div className="col-12 col-md-8">
            {/* name and resume button */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                columnGap: "16px",
                rowGap: "12px",
                alignItems: "center",
              }}
            >
              {/* name */}
              <h1 className="m-0" style={{ fontWeight: "bold" }}>
                Hi, I'm {name.first}
              </h1>
              {/* resume button */}
              <a
                href={cvLink}
                className="btn border-primary text-primary"
                rel="noopener noreferrer"
                target="_blank"
                style={{ justifySelf: "end" }}
              >
                View Resume
              </a>
            </div>
            
            <div style={{ height: "16px" }} />
            
            {/* subheadline */}
            <h3 
              className="m-0"
              style={{
                gridColumn: "1 / -1",
                fontWeight: "bold",
                color: "#666",
              }}
            >
              {subheadline}
            </h3>
          </div>

          {/* top right: avatar */}
          <div className="col-12 col-md-4 text-md-end">
            <img
              src={profilePic}
              alt={name.full}
              className="rounded-circle"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div style={{ height: "16px" }} />

        {/* bottom: introduction */}
        <div className="mt-4">
          <MarkdownRenderer className="text-left" markdownText={introduction} />
        </div>
      </div>
    </div>
  );
};

export default About;