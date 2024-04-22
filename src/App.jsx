import './App.css'
import Navbar from './components/Navbar'
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Footer from './components/Footer';
import { useRef } from 'react';

function App() {

  const anchorRefContact = useRef(null);
  const anchorRefProject = useRef(null);

  const handleProjectScroll = () => {
    if (anchorRefProject.current) {
      anchorRefProject.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest'});
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
      <About handleScroll={handleProjectScroll} />
      <Projects anchorRef={anchorRefProject} handleScroll={handleContactScroll}/>
      <Contact anchorRef={anchorRefContact} />
      <Footer />
    </>
  )
}

export default App
