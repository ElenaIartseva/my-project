import { useContext } from 'react';
import { Theme, ThemeContext } from '@context/ThemeContext';

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  const { theme, setTheme } = context;

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
