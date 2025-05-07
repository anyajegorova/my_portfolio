import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ActiveSectionContext } from './context/ActiveSectionContext';
import AppContent from './AppContent';

function App() {
  const [activeSection, setActiveSection] = useState('');
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      <Router>
        <AppContent />
      </Router>
    </ActiveSectionContext.Provider>
  );
}

export default App;
