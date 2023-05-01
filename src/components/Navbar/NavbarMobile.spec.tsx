import { fireEvent, render, waitFor } from "@testing-library/react";
import { PersonalInfoFactory } from "@tests/factories/PersonalInfoFactory";
import { RecoilRoot } from "recoil";
import useTheme from '@hooks/useTheme';
import NavbarMobile from "./NavbarMobile";
import React from "react";

const personalInfo = PersonalInfoFactory.make();
jest.mock('@hooks/usePersonalInfo', () => {
  return jest.fn().mockImplementation(() => personalInfo);
});

jest.mock('@hooks/useTheme', () => {
  return jest.fn().mockImplementation(() => ({
    handleThemeChange: jest.fn(),
    theme: 'light',
  }));
});

describe('Navbar', () => {
  describe('when menu is closed', () => {
    it('should render correctly', async () => {   
      const { queryByTestId, queryByTitle } = render(
        <RecoilRoot>
          <NavbarMobile />
        </RecoilRoot>
      );

      await waitFor(() => {
        expect(queryByTestId('navbar-mobile')).toBeInTheDocument();
        expect(queryByTestId('navbar-mobile-menu')).not.toBeInTheDocument();
        expect(queryByTitle('memoji24')).toBeInTheDocument();
      })
    });
  });


  describe('when menu is open', () => {
    it('should render correctly', async () => {
      const buttonLabels = [
        'Home',
        'About',
        'Blog',
        'Contact',
      ];

      const setState = jest.fn();
      jest.spyOn(React, 'useState').mockImplementationOnce(() => [true, setState]);

      (window as any).___navigate = jest.fn();
      
      const { queryByTestId, queryByTitle, queryByText } = render(
        <RecoilRoot>
          <NavbarMobile />
        </RecoilRoot>
      );
  
      await waitFor(() => {
        expect(queryByTestId('navbar-mobile')).toBeInTheDocument();
        expect(queryByTestId('navbar-mobile-menu')).toBeInTheDocument();
  
        buttonLabels.forEach((label, index) => {
          const button = queryByText(label);
          expect(button).toBeInTheDocument();
          
          fireEvent.click(button!);

          expect(setState).toBeCalledTimes(index + 1);
          expect((window as any).___navigate).toBeCalledTimes(index + 1);
        });
  
        expect(queryByTitle('memoji24')).toBeInTheDocument();
        expect(queryByTitle(personalInfo.social.github.url)).toBeInTheDocument();
        expect(queryByTitle(personalInfo.social.twitter.url)).toBeInTheDocument();
        expect(queryByTitle(personalInfo.social.medium.url)).toBeInTheDocument();
        expect(queryByTitle(personalInfo.social.linkedin.url)).toBeInTheDocument();
      })
    });
  });

  it('should render correctly when theme is dark', async () => {
    (useTheme as jest.Mock).mockImplementationOnce(() => ({
      handleThemeChange: jest.fn(),
      theme: 'dark',
    }));

    const { queryByTestId } = render(
      <RecoilRoot>
        <NavbarMobile />
      </RecoilRoot>
    );

    await waitFor(() => {
      expect(queryByTestId('navbar-mobile')).toBeInTheDocument();
    });
  });

  it('should toggle menu when clicking on the menu button', async () => {
    const setState = jest.fn();
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [false, setState]);

    const { queryByTestId } = render(
      <RecoilRoot>
        <NavbarMobile />
      </RecoilRoot>
    );

    await waitFor(() => {
      expect(queryByTestId('navbar-mobile')).toBeInTheDocument();

      const menuButton = queryByTestId('toggle-menu-button');
      menuButton?.click();
  
      expect(setState).toHaveBeenCalledWith(true);
    });
  });

  it('should change theme when clicking on the theme button', async () => {
    const handleThemeChange = jest.fn();
    (useTheme as jest.Mock).mockImplementationOnce(() => ({
      handleThemeChange,
      theme: 'light',
    }));


    const setState = jest.fn();
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [true, setState]);

    const { queryByTestId } = render(
      <RecoilRoot>
        <NavbarMobile />
      </RecoilRoot>
    );

    await waitFor(() => {
      expect(queryByTestId('navbar-mobile')).toBeInTheDocument();

      const themeButton = queryByTestId('change-theme-button');
      themeButton?.click();
  
      expect(handleThemeChange).toBeCalledTimes(1);
    });
  });
});