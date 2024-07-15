//1 create context

import { createContext, useState } from 'react';
import { ThemeContextType, ThemeProviderProps } from '../types/theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//2 create parent context provider

function ThemeProvider({ children }: ThemeProviderProps) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

//3 export

export { ThemeContext, ThemeProvider };
