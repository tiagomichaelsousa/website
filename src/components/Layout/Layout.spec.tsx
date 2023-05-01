import { faker } from '@faker-js/faker';
import { render, waitFor } from '@testing-library/react';
import { PersonalInfoFactory } from '@tests/factories/PersonalInfoFactory';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';
import { Layout } from './Layout';
import * as Env from '@utils/env';
import useAllowedTokens from '@hooks/useAllowedTokens';

jest.mock('@hooks/useAllowedTokens');
jest.mock('@utils/env');

const personalInfo = PersonalInfoFactory.make();
jest.mock('@hooks/usePersonalInfo', () => {
  return jest.fn().mockImplementation(() => personalInfo);
});

describe('Layout', () => {
  describe('when it\'s not in maintenance mode', () => {
    it('should render the maintenance page', async () => {
      const page = faker.datatype.string();
      const testId = 'layout';
  
      const { queryByTestId } = render(
        <RecoilRoot>
          <HelmetProvider>
            <Layout page={page}>
              <div />
            </Layout>
          </HelmetProvider>
        </RecoilRoot>
      );
  
      await waitFor(() => {
        const layout = queryByTestId(testId);
  
        expect(layout).toBeInTheDocument();
        expect(document.title).toEqual(`tiagomichaelsousa | ${page}`);
        expect(queryByTestId('footer-container')).toBeInTheDocument();
        expect(queryByTestId('navbar')).toBeInTheDocument();
        expect(queryByTestId('scrolltop-svg')).toBeInTheDocument();
        expect(queryByTestId('maintenance')).not.toBeInTheDocument();
      });
    });
  });

  describe('when it\'s in maintenance mode', () => {
    it('should render correctly', async () => {
      const page = faker.datatype.string();
      const testId = 'layout';

      (jest as typeof jest & { replaceProperty: (obj: object, key: string, value: any) =>  void}).replaceProperty(Env, 'MAINTENANCE_MODE', true);
      (useAllowedTokens as jest.Mock).mockReturnValueOnce(false);

      const { queryByTestId } = render(
        <RecoilRoot>
          <HelmetProvider>
            <Layout page={page}>
              <div />
            </Layout>
          </HelmetProvider>
        </RecoilRoot>
      );


      await waitFor(() => {
        const layout = queryByTestId(testId);

        expect(layout).toBeInTheDocument();
        expect(document.title).toEqual(`tiagomichaelsousa | ${page}`);
        expect(queryByTestId('footer-container')).not.toBeInTheDocument();
        expect(queryByTestId('navbar')).not.toBeInTheDocument();
        expect(queryByTestId('scrolltop-svg')).not.toBeInTheDocument();
        expect(queryByTestId('maintenance')).toBeInTheDocument();
      });
    });
  });

  describe('when it\'s in maintenance mode and the user is allowed to see the page', () => {
    it('should render correctly', async () => {
      const page = faker.datatype.string();
      const testId = 'layout';
      
      (jest as typeof jest & { replaceProperty: (obj: object, key: string, value: any) =>  void}).replaceProperty(Env, 'MAINTENANCE_MODE', true);
      (useAllowedTokens as jest.Mock).mockReturnValueOnce(true);

      const { queryByTestId } = render(
        <RecoilRoot>
          <HelmetProvider>
            <Layout page={page}>
              <div />
            </Layout>
          </HelmetProvider>
        </RecoilRoot>
      );
  
      await waitFor(() => {
        const layout = queryByTestId(testId);
  
        expect(layout).toBeInTheDocument();
        expect(document.title).toEqual(`tiagomichaelsousa | ${page}`);
        expect(queryByTestId('footer-container')).toBeInTheDocument();
        expect(queryByTestId('navbar')).toBeInTheDocument();
        expect(queryByTestId('scrolltop-svg')).toBeInTheDocument();
        expect(queryByTestId('maintenance')).not.toBeInTheDocument();
      });
    });
  });
});