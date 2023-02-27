import { render, waitFor } from "@testing-library/react";
import { PersonalInfoFactory } from "@tests/factories/PersonalInfoFactory";
import { RecoilRoot } from "recoil";
import useTheme from '@hooks/useTheme';
import Maintenance from "./Maintenance";

const personalInfo = PersonalInfoFactory.make();
jest.mock('@hooks/usePersonalInfo', () => {
  return jest.fn().mockImplementation(() => personalInfo);
})

jest.mock('@hooks/useTheme', () => {
  return jest.fn().mockImplementation(() => ({
    handleThemeChange: jest.fn(),
    theme: 'light',
  }));
});


describe('Job section', () => {
  it('should render correctly', async () => {
    const { queryByTitle, queryByTestId } = render(
      <RecoilRoot>
        <Maintenance />
      </RecoilRoot>
    );

    await waitFor(() => {
      expect(queryByTestId('maintenance')).toBeInTheDocument();
      expect(queryByTitle('memoji22')).toBeInTheDocument();

      expect(queryByTitle(personalInfo.social.github.url)).toBeInTheDocument();
      expect(queryByTitle(personalInfo.social.twitter.url)).toBeInTheDocument();
      expect(queryByTitle(personalInfo.social.linkedin.url)).toBeInTheDocument();
      expect(queryByTitle(personalInfo.social.medium.url)).toBeInTheDocument();
    });
  });

  it('should render correctly when theme is dark', async () => {
    (useTheme as jest.Mock).mockImplementationOnce(() => ({
      handleThemeChange: jest.fn(),
      theme: 'dark',
    }));

    const { queryByTestId } = render(
      <RecoilRoot>
        <Maintenance />
      </RecoilRoot>
    );

    await waitFor(() => {
      expect(queryByTestId('maintenance')).toBeInTheDocument();
    });
  });

  it('should change theme when clicking on the theme button', async () => {
    const handleThemeChange = jest.fn();
    (useTheme as jest.Mock).mockImplementationOnce(() => ({
      handleThemeChange,
      theme: 'light',
    }));

    const { queryByTestId } = render(
      <RecoilRoot>
        <Maintenance />
      </RecoilRoot>
    );

    await waitFor(() => {
      expect(queryByTestId('maintenance')).toBeInTheDocument();

      const themeButton = queryByTestId('change-theme-button');
      themeButton?.click();
  
      expect(handleThemeChange).toBeCalledTimes(1);
    });
  });
});