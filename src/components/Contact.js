import React from "react";
import { name, githublink, linkedinlink, email, MarkdownRenderer } from "./Helper";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./Icons";

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <div className="contact-section">
      <div className="text-center mb-5">
        <h2 className="mb-4">Contact Me</h2>

        <MarkdownRenderer
          markdownText={
            "##### I'm always open to new opportunities and collaborations.\n" +
            "##### Feel free to reach out and connect!\n" +
            "*Open to 2026 full-time roles in ML/DS for biology (Boston/remote).*"
          }
        />

        <div style={{ height: "16px" }} />

        <div className="d-flex justify-content-center mt-4 flex-wrap gap-2">
          <a
            href={githublink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary"
          >
            <GitHubIcon /> GitHub
          </a>
          <a
            href={linkedinlink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary"
          >
            <LinkedInIcon /> LinkedIn
          </a>
          <a
            href={`mailto:${email}`}
            className="btn btn-outline-secondary"
          >
            <EmailIcon /> Email
          </a>
        </div>

      </div>

      <footer className="text-center">
        &copy; {year} {name.full}. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Contact;