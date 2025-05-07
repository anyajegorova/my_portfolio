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
import './utils/i18n';
import CookieConsentPopup from './components/CookieConsentPopup';
import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import PrivacyPolicy from './views/PrivacyPolicy';
import { useActiveSection } from './context/ActiveSectionContext';

// Lazy-loaded components
const Projects2 = lazy(() => import('./views/Projects2'));
const Contact = lazy(() => import('./views/Contact'));
const ImageModal = lazy(() => import('./components/ImageModal'));

const AppContent = () => {
  const { activeSection, setActiveSection } = useActiveSection();
  const anchorRefContact = useRef<HTMLDivElement>(null);
  const anchorRefProject = useRef<HTMLDivElement>(null);
  const anchorRefAbout = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  const location = useLocation();

  // Scroll handlers
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAboutScroll = () => scrollToRef(anchorRefAbout);
  const handleProjectScroll = () => scrollToRef(anchorRefProject);
  const handleContactScroll = () => scrollToRef(anchorRefContact);

  // Scroll tracking for navbar visibility + active section
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    setIsNavbarVisible(currentScrollY < lastScrollY.current);
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

  // Set active section for route changes
  useEffect(() => {
    if (location.pathname === '/privacy-policy') {
      setActiveSection('privacy-policy');
    }
  }, [location.pathname, setActiveSection]);

  // Handle scroll to section after route transition
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const section = location.state.scrollTo;
      setTimeout(() => {
        if (section === "about") handleAboutScroll();
        else if (section === "projects") handleProjectScroll();
        else if (section === "contact") handleContactScroll();
      }, 100); // wait for content to mount
      window.history.replaceState({}, document.title); // clean up state
    }
  }, [location]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleImageClick = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  return (
    <>
      <Navbar
        isVisible={isNavbarVisible}
        handleAboutScroll={handleAboutScroll}
        handleProjectScroll={handleProjectScroll}
        handleContactScroll={handleContactScroll}
      />
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/"
          element={
            <>
              <div id="about" ref={anchorRefAbout}>
                <About2 handleProjectScroll={handleProjectScroll} />
              </div>
              <div id="statistics">
                <Statistics />
              </div>
              <div id="approach">
                <Approach />
              </div>
              <Suspense fallback={<div>Loading projects…</div>}>
                <div id="projects" ref={anchorRefProject}>
                  <Projects2 onImageClick={handleImageClick} />
                </div>
              </Suspense>
              <Suspense fallback={<div>Loading contact…</div>}>
                <div id="contact" ref={anchorRefContact}>
                  <Contact />
                </div>
              </Suspense>
              <Footer />
              {isModalOpen && (
                <Suspense fallback={<div>Loading image…</div>}>
                  <ImageModal image={modalImage} onClose={handleCloseModal} />
                </Suspense>
              )}
            </>
          }
        />
      </Routes>
      <CookieConsentPopup />
    </>
  );
};

export default AppContent;
