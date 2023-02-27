import { render, waitFor } from "@testing-library/react";
import { PersonalInfoFactory } from "@tests/factories/PersonalInfoFactory";
import { RecoilRoot } from "recoil";
import Navbar from "./Navbar";
import useTheme from '@hooks/useTheme';

const personalInfo = PersonalInfoFactory.make();
jest.mock('@hooks/usePersonalInfo', () => {
  return jest.fn().mockImplementation(() => personalInfo);
});

jest.mock('@components', () => ({
  ...jest.requireActual('@components'),
  NavbarMobile: () => <div data-testid="navbar-mobile" />,
}))

jest.mock('@hooks/useTheme', () => {
  return jest.fn().mockImplementation(() => ({
    handleThemeChange: jest.fn(),
    theme: 'light',
  }));
});


describe('Navbar', () => {
  it('should render correctly', async () => {
    const buttonLabels = [
      'Home',
      'About',
      'Blog',
      'Contact',
    ]
    
    const { queryByTestId, queryByTitle, queryByText } = render(
      <RecoilRoot>
        <Navbar />
      </RecoilRoot>
    );

    await waitFor(() => {
      expect(queryByTestId('navbar')).toBeInTheDocument();

      buttonLabels.forEach(label => {
        expect(queryByText(label)).toBeInTheDocument();
      });

      expect(queryByTitle('memoji24')).toBeInTheDocument();
      expect(queryByTitle(personalInfo.social.github.url)).toBeInTheDocument();
      expect(queryByTitle(personalInfo.social.twitter.url)).toBeInTheDocument();
      expect(queryByTitle(personalInfo.social.medium.url)).toBeInTheDocument();
      expect(queryByTitle(personalInfo.social.linkedin.url)).toBeInTheDocument();
      expect(queryByTestId('navbar-mobile')).toBeInTheDocument();
    })
  });

  it('should render correctly when theme is dark', async () => {
    (useTheme as jest.Mock).mockImplementationOnce(() => ({
      handleThemeChange: jest.fn(),
      theme: 'dark',
    }));

    const { queryByTestId } = render(
      <RecoilRoot>
        <Navbar />
      </RecoilRoot>
    );

    await waitFor(() => {
      expect(queryByTestId('navbar')).toBeInTheDocument();
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
        <Navbar />
      </RecoilRoot>
    );

    await waitFor(() => {
      expect(queryByTestId('navbar')).toBeInTheDocument();

      const themeButton = queryByTestId('change-theme-button');
      themeButton?.click();
  
      expect(handleThemeChange).toBeCalledTimes(1);
    });
  });
});