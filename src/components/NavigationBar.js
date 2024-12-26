import React from "react";
import { name, sections } from "./Helper";

const NavigationBar = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a href="/" className="navbar-brand" style={{ fontFamily: "Georgia" }}>
          {name.full}
        </a>
        <button
          className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {sections.map((section) => (
              <li
                className="nav-link"
                style={{ fontWeight: activeSection === section.id ? "bold" : "normal" }}
                key={section.id}
                onClick={() => scrollToSection(section.id)}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;