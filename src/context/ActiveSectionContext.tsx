import { createContext } from 'react';

export const ActiveSectionContext = createContext({
  activeSection: '',
  setActiveSection: (section: string) => {}
});
