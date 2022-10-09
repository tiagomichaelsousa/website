import { atom } from "recoil";

type ThemeType = 'light' | 'dark' | undefined;

export const TeamModalState = atom<ThemeType>({
  key: 'theme',
  default: 'light',
})

export default TeamModalState;
