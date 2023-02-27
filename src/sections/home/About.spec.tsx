import { render, waitFor } from "@testing-library/react";
import { AboutFactory } from "@tests/factories/AboutFactory";
import About from "./About";


const { about } = AboutFactory.make();
jest.mock('@hooks/useAbout', () => {
  return jest.fn().mockImplementation(() => ({ about }));
})

describe('About section', () => {
  it('should render correctly', async () => {
    const { queryByTestId, queryByText } = render(
      <About />
    );

    await waitFor(() => {
      expect(queryByTestId('heading-about')).toBeInTheDocument();

      about.left.forEach(({ title, description, icon }) => {
        expect(queryByText(title)).toBeInTheDocument();
        expect(queryByText(description)).toBeInTheDocument();
        expect(queryByText(icon.svg.content)).toBeInTheDocument();
      });

      about.right.forEach(({ title, description, icon }) => {
        expect(queryByText(title)).toBeInTheDocument();
        expect(queryByText(description)).toBeInTheDocument();
        expect(queryByText(icon.svg.content)).toBeInTheDocument();
      });
    });
  });
});