import './App.css'
import Navbar from './components/Navbar'
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
