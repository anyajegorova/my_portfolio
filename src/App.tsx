import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About2 from './views/About2';
import Projects2 from './views/Projects2';
import Contact from './views/Contact';
import Footer from './components/Footer';
import { ActiveSectionContext } from './context/ActiveSectionContext';
import ImageModal from './components/ImageModal';
import Statistics from './components/Statistics';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const anchorRefContact = useRef<HTMLDivElement>(null);
  const anchorRefProject = useRef<HTMLDivElement>(null);
  const anchorRefAbout = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

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

  const handleImageClick = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage('');
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
      <div id="statistics">
        <Statistics />
      </div>
      <div id="projects">
        <Projects2 anchorRef={anchorRefProject} onImageClick={handleImageClick} />
      </div>
      <div id="contact">
        <Contact anchorRef={anchorRefContact} />
      </div>
      <Footer />
      {isModalOpen && <ImageModal image={modalImage} onClose={handleCloseModal} />}
    </ActiveSectionContext.Provider>
  );
}

export default App;
