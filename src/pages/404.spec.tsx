import { render, waitFor } from "@testing-library/react";
import { PersonalInfoFactory } from "@tests/factories/PersonalInfoFactory";
import { HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";
import NotFoundPage from "./404";


jest.mock('@hooks/useAllowedTokens');
jest.mock('@hooks/usePersonalInfo', () => {
  return jest.fn().mockImplementation(() => PersonalInfoFactory.make());
})

describe('404 page', () => {
  it('should render correctly', async () => {
    const { queryByTestId, queryByTitle, queryByText } = render(
      <HelmetProvider>
        <RecoilRoot>
          <NotFoundPage />
        </RecoilRoot>
      </HelmetProvider>
    );

    await waitFor(() => {
      expect(queryByTestId('layout')).toBeInTheDocument();
      expect(queryByTitle('memoji05')).toBeInTheDocument();
      expect(queryByText('Oops 👻')).toBeInTheDocument();
      expect(queryByText('Looks like I can\'t find what you are looking for')).toBeInTheDocument();
      expect(queryByText('But you can still')).toBeInTheDocument();
      expect(queryByText('go home')).toBeInTheDocument();
    });
  });
});