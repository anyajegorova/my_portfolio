import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import About2 from './views/About2';
import Projects2 from './views/Projects2';
import { useRef } from 'react';
import Technologies from './components/Technologies';
import Divider from './components/Divider';

function App() {

  const anchorRefContact = useRef<HTMLDivElement>(null);
  const anchorRefProject = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <Navbar handleScroll={handleContactScroll} />
      <About2 />
      <Divider />
      <Projects2 anchorRef={anchorRefProject} handleScroll={handleContactScroll} />
      <Divider />
      <Technologies/>
    </>
  )
}

export default App
