import React, {
  useRef,
  useEffect,
  useState,
  lazy,
  Suspense
} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About2 from './views/About2';
import Footer from './components/Footer';
import Statistics from './components/Statistics';
import Approach from './components/Approach';
import { ActiveSectionContext } from './context/ActiveSectionContext';
import './utils/i18n';

// Lazy-loaded components
const Projects2 = lazy(() => import('./views/Projects2'));
const Contact = lazy(() => import('./views/Contact'));
const ImageModal = lazy(() => import('./components/ImageModal'));

function App() {
  const [activeSection, setActiveSection] = useState('');
  const anchorRefContact = useRef<HTMLDivElement>(null);
  const anchorRefProject = useRef<HTMLDivElement>(null);
  const anchorRefAbout = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleProjectScroll = () => {
    if (anchorRefProject.current) {
      anchorRefProject.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  };
  const handleContactScroll = () => {
    if (anchorRefContact.current) {
      anchorRefContact.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleAboutScroll = () => {
    if (anchorRefAbout.current) {
      anchorRefAbout.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current) {
      setIsNavbarVisible(false); // Scrolling down
    } else {
      setIsNavbarVisible(true); // Scrolling up
    }

    lastScrollY.current = currentScrollY;

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
      <Navbar
        isVisible={isNavbarVisible}
        handleAboutScroll={handleAboutScroll}
        handleProjectScroll={handleProjectScroll}
        handleContactScroll={handleContactScroll}
      />
      <div id="about">
        <About2 anchorRef={anchorRefAbout} handleProjectScroll={handleProjectScroll} />
      </div>
      <div id="statistics">
        <Statistics />
      </div>
      <div id="approach">
        <Approach />
      </div>
      <Suspense fallback={<div>Loading projects…</div>}>
        <div id="projects">
          <Projects2 anchorRef={anchorRefProject} onImageClick={handleImageClick} />
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading contact…</div>}>
        <div id="contact">
          <Contact anchorRef={anchorRefContact} />
        </div>
      </Suspense>
      <Footer />
      {isModalOpen && (
        <Suspense fallback={<div>Loading image…</div>}>
          <ImageModal image={modalImage} onClose={handleCloseModal} />
        </Suspense>
      )}
    </ActiveSectionContext.Provider>
  );
}

export default App;
