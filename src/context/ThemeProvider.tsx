import {
  ReactNode, useCallback, useEffect, useMemo, useState,
} from 'react';
import LOCAL_STORAGE_KEYS from '@constants/localStorage';
import { Theme, ThemeContext } from './ThemeContext';

type ThemeProviderProps = {
  children: ReactNode
  initialTheme?: Theme
};

function getStoredTheme(): Theme {
  const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.theme);

  if (storedTheme === Theme.LIGHT || storedTheme === Theme.DARK) {
    return storedTheme;
  }

  return Theme.LIGHT;
}

function applyThemeClass(theme: Theme) {
  document.body.classList.remove(Theme.LIGHT, Theme.DARK);
  document.body.classList.add(theme);
}

function ThemeProvider(props: ThemeProviderProps) {
  const {
    children,
    initialTheme,
  } = props;

  const [theme, setThemeState] = useState(initialTheme ?? getStoredTheme());

  useEffect(() => {
    applyThemeClass(theme);
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEYS.theme, newTheme);
  }, []);

  const defaultValue = useMemo(() => ({
    theme,
    setTheme,
  }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
