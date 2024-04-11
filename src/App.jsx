import './App.css'
import Navbar from './components/Navbar'
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Footer from './components/Footer';
import { useRef } from 'react';

function App() {

  const anchorRef = useRef(null);

  const handleScroll = () => {
    if (anchorRef.current) {
      anchorRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <Navbar handleScroll={handleScroll} />
      <About />
      <Projects />
      <Contact anchorRef={anchorRef} />
      <Footer />
    </>
  )
}

export default App
