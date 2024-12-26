import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import NavigationBar from "../components/NavigationBar";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import ProjectDetails from "../components/ProjectDetails";
import EducationDetails from "../components/EducationDetails";

const Home = () => {
  // Define scrolling behavior
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    const sections = document.querySelectorAll(".snap-section");
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  // Control details display for projects
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const handleProjectDetails = (project, more, fromback = false) => {
    if (more) {
      setSelectedProject(project);
      setShowProjectDetails(true);
      setTimeout(() => scrollToSection("project-details"), 5); // In case next section hasn't been rendered yet
    } else {
      scrollToSection("projects");
      setTimeout(() => {
        setSelectedProject(null);
        setShowProjectDetails(false);
      }, fromback ? 550 : 0); // Wait for scroll animation to finish
    }
  };

  // Same logic for education details
  const [showEducationDetails, setShowEducationDetails] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const handleEducationDetails = (education, more, fromback = false) => {
    if (more) {
      setSelectedEducation(education);
      setShowEducationDetails(true);
      setTimeout(() => scrollToSection("education-details"), 5);
    } else {
      scrollToSection("experience");
      setTimeout(() => {
        setSelectedEducation(null);
        setShowEducationDetails(false);
      }, fromback ? 550 : 0);
    }
  };

  // Render the app with navigation bar and four (to six) sections
  return (
    <div className="App">
      <NavigationBar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className="snap-container">
        <Element id="about" name="about" className="snap-section">
          <About
            scrollToSection={scrollToSection}
          />
        </Element>
        <Element id="projects" name="projects" className="snap-section">
          <Projects
            handleDisplay={handleProjectDetails}
            selectedProject={selectedProject}
          />
        </Element>
        {showProjectDetails && (
          <Element id="project-details" name="project-details" className="snap-section">
            <ProjectDetails
              selectedProject={selectedProject}
              handleDisplay={handleProjectDetails}
            />
          </Element>
        )}
        <Element id="experience" name="experience" className="snap-section">
          <Experience
            handleDisplay={handleEducationDetails}
            selectedEducation={selectedEducation}
          />
        </Element>
        {showEducationDetails && (
          <Element id="education-details" name="education-details" className="snap-section">
            <EducationDetails
              selectedEducation={selectedEducation}
              handleDisplay={handleEducationDetails}
            />
          </Element>
        )}
        <Element id="contact" name="contact" className="snap-section">
          <Contact />
        </Element>
      </div>
    </div>
  );
};

export default Home;
