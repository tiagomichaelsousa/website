import { ThemeTypeEnum } from "@state/theme";
import { renderHook } from "@testing-library/react";
import { useRecoilState } from 'recoil';
import useTheme, { THEME_KEY } from "./useTheme";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('recoil');

describe('useTheme', () => {
  afterEach(() => {
    jest.clearAllMocks();
    window.localStorage.clear();
  })

  it('should return the light theme', () => {
    const setTheme = jest.fn();
    (useRecoilState as jest.Mock).mockImplementation(() => [ThemeTypeEnum.LIGHT, setTheme]);

    const { result } = renderHook(useTheme);

    expect(result.current.theme).toEqual(ThemeTypeEnum.LIGHT);
  });

  it('should return the dark theme', () => {
    const setTheme = jest.fn();
    (useRecoilState as jest.Mock).mockImplementation(() => [ThemeTypeEnum.DARK, setTheme]);

    const { result } = renderHook(useTheme);

    expect(result.current.theme).toEqual(ThemeTypeEnum.DARK);
  });

  it('should set the theme', () => {
    const setTheme = jest.fn();
    (useRecoilState as jest.Mock).mockImplementation(() => [ThemeTypeEnum.LIGHT, setTheme]);

    const { result } = renderHook(useTheme);

    result.current.handleThemeChange();

    expect(setTheme).toHaveBeenCalledWith(ThemeTypeEnum.DARK);
  });

  it('should set the theme to light by default', () => {
    const setTheme = jest.fn();
    (useRecoilState as jest.Mock).mockImplementation(() => [undefined, setTheme]);

    renderHook(useTheme);

    expect(setTheme).toHaveBeenCalledWith(ThemeTypeEnum.LIGHT);
  });

  it('should get currentTheme from localStorage', () => {
    const setTheme = jest.fn();
    (useRecoilState as jest.Mock).mockImplementation(() => [undefined, setTheme]);

    window.localStorage.setItem(THEME_KEY, ThemeTypeEnum.DARK);

    renderHook(useTheme);

    expect(setTheme).toHaveBeenCalledWith(ThemeTypeEnum.DARK);
  });

  it('should add class to body when light', () => {
    const setTheme = jest.fn();
    (useRecoilState as jest.Mock).mockImplementation(() => [ThemeTypeEnum.LIGHT, setTheme]);

    renderHook(useTheme);

    expect(document.body.classList.contains(ThemeTypeEnum.LIGHT)).toBeTruthy();
  });

  it('should add class to body when dark', () => {
    const setTheme = jest.fn();
    (useRecoilState as jest.Mock).mockImplementation(() => [ThemeTypeEnum.DARK, setTheme]);

    renderHook(useTheme);

    expect(document.body.classList.contains(ThemeTypeEnum.DARK)).toBeTruthy();
  });

  it('should change theme when handleThemeChange is called to dark', () => {
    const setTheme = jest.fn();
    (useRecoilState as jest.Mock).mockImplementation(() => [ThemeTypeEnum.LIGHT, setTheme]);

    const { result } = renderHook(useTheme);

    result.current.handleThemeChange();

    expect(setTheme).toHaveBeenCalledWith(ThemeTypeEnum.DARK);
    expect(window.localStorage.getItem(THEME_KEY)).toEqual(ThemeTypeEnum.DARK);
  });

  it('should change theme when handleThemeChange is called to light', () => {
    const setTheme = jest.fn();
    (useRecoilState as jest.Mock).mockImplementation(() => [ThemeTypeEnum.DARK, setTheme]);

    const { result } = renderHook(useTheme);

    result.current.handleThemeChange();

    expect(setTheme).toHaveBeenCalledWith(ThemeTypeEnum.LIGHT);
    expect(window.localStorage.getItem(THEME_KEY)).toEqual(ThemeTypeEnum.LIGHT);
  });
});