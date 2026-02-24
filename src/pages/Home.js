import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import { ScrollIndicator } from "../components/Icons";
import NavigationBar from "../components/NavigationBar";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import ProjectDetails from "../components/ProjectDetails";
import ExperienceDetails from "../components/ExperienceDetails";

const Section = ({ children, fadein=true, isLastSection=false }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    fadein ? (
      <div
        ref={ref}
        className="fade-in"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        {children}
        {!isLastSection && <ScrollIndicator />}
      </div>
    ) : (
      <div>
        {children}
        {!isLastSection && <ScrollIndicator />}
      </div>
    )
  );
};

const Home = () => {
  // Define scrolling behavior
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Automatically detect active section to highlight in navigation bar
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
  // Scroll to a specific section; close the menu in mobile view window after scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // setActiveSection(id); // Unnecessary because of observer
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

  // Same logic for experience details
  const [showExperienceDetails, setShowExperienceDetails] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const handleExperienceDetails = (experience, more, fromback = false) => {
    if (more) {
      setSelectedExperience(experience);
      setShowExperienceDetails(true);
      setTimeout(() => scrollToSection("experience-details"), 5);
    } else {
      scrollToSection("experience");
      setTimeout(() => {
        setSelectedExperience(null);
        setShowExperienceDetails(false);
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
          <Section>
            <About />
          </Section>
        </Element>
        <Element id="projects" name="projects" className="snap-section">
          <Section >
            <Projects
              handleDisplay={handleProjectDetails}
              selectedProject={selectedProject}
            />
          </Section>
        </Element>
        {showProjectDetails && (
          <Element id="project-details" name="project-details" className="snap-section">
            <Section>
              <ProjectDetails
                selectedProject={selectedProject}
                handleDisplay={handleProjectDetails}
              />
            </Section>
          </Element>
        )}
        <Element id="experience" name="experience" className="snap-section">
          <Section >
            <Experience
              handleDisplay={handleExperienceDetails}
              selectedExperience={selectedExperience}
            />
          </Section></Element>
        {showExperienceDetails && (
          <Element id="experience-details" name="experience-details" className="snap-section">
            <Section>
              <ExperienceDetails
                selectedExperience={selectedExperience}
                handleDisplay={handleExperienceDetails}
              />
            </Section>
          </Element>
        )}
        <Element id="contact" name="contact" className="snap-section">
          <Section isLastSection={true}>
            <Contact />
          </Section>
        </Element>
      </div>
    </div>
  );
};

export default Home;
