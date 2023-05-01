import { render, waitFor } from "@testing-library/react";
import { AboutFactory } from "@tests/factories/AboutFactory";
import { ArticleFactory } from "@tests/factories/ArticleFactory";
import { PersonalInfoFactory } from "@tests/factories/PersonalInfoFactory";
import { TechnologyFactory } from "@tests/factories/TechnologyFactory";
import { HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";
import IndexPage from ".";

jest.mock('@hooks/useAllowedTokens');
jest.mock('@hooks/usePersonalInfo', () => {
  return jest.fn().mockImplementation(() => PersonalInfoFactory.make());
})

jest.mock('@hooks/useLatestArticles', () => {
  return jest.fn().mockImplementation(() => ArticleFactory.makeMany(10));
})

jest.mock('@hooks/useTechnologies', () => {
  return jest.fn().mockImplementation(() => TechnologyFactory.makeMany(10));
})

jest.mock('@hooks/useAbout', () => {
  return jest.fn().mockImplementation(() => AboutFactory.make());
})

describe('Index page', () => {
  it('should render correctly', async () => {
    const { queryByTestId, queryByTitle } = render(
      <HelmetProvider>
        <RecoilRoot>
          <IndexPage />
        </RecoilRoot>
      </HelmetProvider>
    );

    await waitFor(() => {
      expect(queryByTestId('layout')).toBeInTheDocument();
      expect(document.title).toEqual('tiagomichaelsousa | Home');
      expect(queryByTitle('background-image')).toBeInTheDocument();
    });
  });
});