import { createContext, useState } from 'react';

const ThemeContext = createContext();

export { ThemeContext };

const initializeTheme = () => {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.classList.toggle('dark', saved === 'dark');
  return saved;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initializeTheme);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};