import { ReactNode } from 'react';

export type ThemeContextType = {
  darkMode: boolean;
  setDarkMode?: (value: boolean) => void;
  toggleDarkMode: () => void;
};

export type ThemeProviderProps = {
  children: ReactNode;
};
