import { render, waitFor } from "@testing-library/react";
import Banner from "./Banner";


describe('Banner section', () => {
  it('should render correctly', async () => {
    const { queryByTestId, queryByTitle } = render(
      <Banner />
    );

    await waitFor(() => {
      expect(queryByTestId('banner-box')).toBeInTheDocument();
      expect(queryByTitle('banner')).toBeInTheDocument();
      expect(queryByTitle('background-image')).toBeInTheDocument();
    });
  });
});