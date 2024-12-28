import React from "react";
import { name, githublink, linkedinlink, email, MarkdownRenderer } from "./Helper";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./Icons";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="text-center mb-5">
        <h2 className="mb-4">Contact Me</h2>
        <MarkdownRenderer
          markdownText={"##### I'm always open to new opportunities and collaborations.\n##### Feel free to reach out and connect!"}
        />
        <div className="d-flex justify-content-center mt-4">
          <a
            href={githublink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary mx-2"
          >
            <GitHubIcon /> GitHub
          </a>
          <a
            href={linkedinlink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary mx-2"
          >
            <LinkedInIcon /> LinkedIn
          </a>
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary mx-2"
          >
            <EmailIcon /> Email
          </a>
        </div>
      </div>
      <footer className="text-center">
        &copy; 2024 {name.full}. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Contact;