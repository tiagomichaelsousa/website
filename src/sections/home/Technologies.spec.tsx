import { render, waitFor } from "@testing-library/react";
import { TechnologyFactory } from "@tests/factories/TechnologyFactory";
import Technologies from "./Technologies";

const technologies = TechnologyFactory.makeMany(10);
jest.mock('@hooks/useTechnologies', () => {
  return jest.fn().mockImplementation(() => technologies);
})

describe('Job section', () => {
  it('should render correctly', async () => {
    const { queryAllByTitle, queryByTitle, queryAllByText } = render(
      <Technologies />
    );

    await waitFor(() => {
      expect(queryByTitle('memoji56')).toBeInTheDocument();

      technologies.forEach(({ url, logo }) => {
        // Needs to be queryAllByTitle because swiper creates duplicate items to be looped
        expect(queryAllByTitle(url).length).toBeGreaterThan(0);
        expect(queryAllByText(logo.svg.content).length).toBeGreaterThan(0);
      });
    });
  });
});