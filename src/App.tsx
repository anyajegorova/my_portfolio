import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About2 from './views/About2';
import Projects2 from './views/Projects2';
import Divider from './components/Divider';
import Contact from './views/Contact';
import Footer from './components/Footer';
import { ActiveSectionContext } from './context/ActiveSectionContext';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const anchorRefContact = useRef<HTMLDivElement>(null);
  const anchorRefProject = useRef<HTMLDivElement>(null);
  const anchorRefAbout = useRef<HTMLDivElement>(null);

  const handleProjectScroll = () => {
    if (anchorRefProject.current) {
      anchorRefProject.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      console.log('Clicked');
    }
  };
  const handleContactScroll = () => {
    if (anchorRefContact.current) {
      anchorRefContact.current.scrollIntoView({ behavior: 'smooth' });
      console.log('Clicked');
    }
  };
  const handleAboutScroll = () => {
    if (anchorRefAbout.current) {
      anchorRefAbout.current.scrollIntoView({ behavior: 'smooth' });
      console.log('Clicked');
    }
  };

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');

    if (aboutSection && projectsSection && contactSection) {
      const aboutTop = aboutSection.getBoundingClientRect().top;
      const projectsTop = projectsSection.getBoundingClientRect().top;
      const contactTop = contactSection.getBoundingClientRect().top;

      if (aboutTop <= 0 && projectsTop > 0) {
        setActiveSection('about');
      } else if (projectsTop <= 0 && contactTop > 0) {
        setActiveSection('projects');
      } else if (contactTop <= 0) {
        setActiveSection('contact');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      <Navbar handleAboutScroll={handleAboutScroll} handleProjectScroll={handleProjectScroll} handleContactScroll={handleContactScroll} />
      <div id="about">
        <About2 anchorRef={anchorRefAbout} handleProjectScroll={handleProjectScroll} />
      </div>
      <Divider />
      <div id="projects">
        <Projects2 anchorRef={anchorRefProject} />
      </div>
      <Divider />
      <Divider />
      <div id="contact">
        <Contact anchorRef={anchorRefContact} />
      </div>
      <Footer />
    </ActiveSectionContext.Provider>
  );
}

export default App;
