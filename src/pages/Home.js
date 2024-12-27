import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import NavigationBar from "../components/NavigationBar";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import ProjectDetails from "../components/ProjectDetails";
import EducationDetails from "../components/EducationDetails";

const Home = () => {
  // Define a section component with fade-in effect
  const Section = ({ children, fadein=true }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.8,
    });

    return (
      fadein && window.innerWidth > 768 ? (
        <div
          ref={ref}
          className="fade-in"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          {children}
        </div>
      ) : (
        <div>
          {children}
        </div>
      )
    );
  };

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
          // Resume fade-in effect that were cancelled to avoid flickering when scrolling back
          if (entry.intersectionRatio < 0.05 || !entry.isIntersecting) {
            if (entry.target.id === "projects") {
              setProjectFadeIn(true);
            } else if (entry.target.id === "experience") {
              setExperienceFadeIn(true);
            }
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
  const [projectFadeIn, setProjectFadeIn] = useState(true);
  const handleProjectDetails = (project, more, fromback = false) => {
    if (more) {
      setProjectFadeIn(false); // Cancel fade-in effect to avoid flickering
      setSelectedProject(project);
      setShowProjectDetails(true);
      setTimeout(() => scrollToSection("project-details"), 5); // In case next section hasn't been rendered yet
      setProjectFadeIn(false);
    } else {
      setProjectFadeIn(false); // Cancel fade-in effect to avoid flickering
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
  const [experienceFadeIn, setExperienceFadeIn] = useState(true);
  const handleEducationDetails = (education, more, fromback = false) => {
    if (more) {
      setExperienceFadeIn(false);
      setSelectedEducation(education);
      setShowEducationDetails(true);
      setTimeout(() => scrollToSection("education-details"), 5);
    } else {
      setExperienceFadeIn(false);
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
          <Section>
            <About />
          </Section>
        </Element>
        <Element id="projects" name="projects" className="snap-section">
          <Section fadein={projectFadeIn} >
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
          <Section fadein={experienceFadeIn} >
            <Experience
              handleDisplay={handleEducationDetails}
              selectedEducation={selectedEducation}
            />
          </Section></Element>
        {showEducationDetails && (
          <Element id="education-details" name="education-details" className="snap-section">
            <Section>
              <EducationDetails
                selectedEducation={selectedEducation}
                handleDisplay={handleEducationDetails}
              />
            </Section>
          </Element>
        )}
        <Element id="contact" name="contact" className="snap-section">
          <Section>
            <Contact />
          </Section>
        </Element>
      </div>
    </div>
  );
};

export default Home;
