import { useCallback, useEffect, useRef, useState } from 'react';
import { darkTheme } from '@theme/stitches.config';

export const LIGHT_THEME_KEY = 'light';
export const THEME_KEY = 'theme';

const useTheme = () => {
  const [theme, setTheme] = useState(LIGHT_THEME_KEY);

  useEffect(() => {
    const currentTheme = localStorage.getItem(THEME_KEY);

    if (!currentTheme) {
      setTheme(LIGHT_THEME_KEY);
      return;
    }

    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    document.body.classList.remove(LIGHT_THEME_KEY, darkTheme);
    document.body.classList.add(theme);
  }, [theme]);

  const handleThemeChange = useCallback(() => {
    const currentTheme = theme === LIGHT_THEME_KEY ? darkTheme : LIGHT_THEME_KEY;
    localStorage.setItem(THEME_KEY, currentTheme);
    setTheme(currentTheme);
  }, [theme]);

  return {
    handleThemeChange,
    theme: theme === LIGHT_THEME_KEY ? LIGHT_THEME_KEY : 'dark'
  };
};

export default useTheme;
