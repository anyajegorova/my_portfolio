import { createContext, useContext } from 'react';

export type Section = 'about' | 'projects' | 'contact' | 'privacy-policy' | '';

interface ActiveSectionContextType {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType>({
  activeSection: '',
  setActiveSection: () => { },
});

// Optional: Custom hook for easy access
export const useActiveSection = () => useContext(ActiveSectionContext);
