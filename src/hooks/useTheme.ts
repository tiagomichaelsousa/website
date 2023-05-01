import { useCallback, useEffect } from 'react';
import { darkTheme } from '@theme/stitches.config';
import { useRecoilState } from 'recoil';
import State from '../state';
import { ThemeType, ThemeTypeEnum } from '../state/theme';

export const LIGHT_THEME_KEY = ThemeTypeEnum.LIGHT;
export const THEME_KEY = 'theme';

const useTheme = () => {
  const [theme, setTheme] = useRecoilState(State.theme)

  useEffect(() => {
    const currentTheme = localStorage.getItem(THEME_KEY) as ThemeType;

    if (!currentTheme) {
      setTheme(LIGHT_THEME_KEY);
      return;
    }

    setTheme(currentTheme);
  }, [setTheme]);

  useEffect(() => {
    if(!theme) return;
    
    document.body.classList.remove(LIGHT_THEME_KEY, darkTheme);
    document.body.classList.add(theme);
  }, [theme]);

  const handleThemeChange = useCallback(() => {
    const currentTheme = theme === LIGHT_THEME_KEY ? ThemeTypeEnum.DARK : LIGHT_THEME_KEY;
    localStorage.setItem(THEME_KEY, currentTheme);
    setTheme(currentTheme);
  }, [setTheme, theme]);

  return {
    handleThemeChange,
    theme: theme === LIGHT_THEME_KEY ? LIGHT_THEME_KEY : ThemeTypeEnum.DARK
  };
};

export default useTheme;
