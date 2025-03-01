import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import About2 from './views/About2';
import Projects2 from './views/Projects2';
import { useRef } from 'react';
// import Technologies from './components/Technologies';
import Divider from './components/Divider';
import Contact from './views/Contact';
import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';

function App() {

  const anchorRefContact = useRef<HTMLDivElement>(null);
  const anchorRefProject = useRef<HTMLDivElement>(null);
  const anchorRefAbout = useRef<HTMLDivElement>(null);

  const handleProjectScroll = () => {
    if (anchorRefProject.current) {
      anchorRefProject.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      console.log('Clicked')
    }
  }
  const handleContactScroll = () => {
    if (anchorRefContact.current) {
      anchorRefContact.current.scrollIntoView({ behavior: 'smooth' });
      console.log('Clicked')
    }
  }
  const handleAboutScroll = () => {
    if (anchorRefAbout.current) {
      anchorRefAbout.current.scrollIntoView({ behavior: 'smooth' });
      console.log('Clicked')
    }
  }

  return (
    <>
      <Navbar handleAboutScroll={handleAboutScroll} handleProjectScroll={handleProjectScroll} handleContactScroll={handleContactScroll} />
      <About2 anchorRef={anchorRefAbout} handleProjectScroll={handleProjectScroll} />
      <Divider />
      <Projects2 anchorRef={anchorRefProject} />
      <Divider />
      {/* <Technologies/> */}
      <Divider />
      <Contact anchorRef={anchorRefContact}/>
      <Footer/>
    </>
  )
}

export default App
