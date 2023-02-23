import { atom } from "recoil";

export enum ThemeTypeEnum {
  LIGHT = 'light',
  DARK = 'dark',
};

export type ThemeType = `${ThemeTypeEnum}` 

export const TeamModalState = atom<ThemeType>({
  key: 'theme',
  default: 'light',
})

export default TeamModalState;
