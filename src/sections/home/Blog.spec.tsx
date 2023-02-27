import { render, waitFor } from "@testing-library/react";
import { ArticleFactory } from "@tests/factories/ArticleFactory";
import Blog from "./Blog";

const articles = ArticleFactory.makeMany(10);
jest.mock('@hooks/useLatestArticles', () => {
  return jest.fn().mockImplementation(() => articles);
})

describe('Blog section', () => {
  it('should render correctly', async () => {
    const { queryByTestId, queryByText } = render(
      <Blog />
    );

    await waitFor(() => {
      expect(queryByTestId('heading-blog')).toBeInTheDocument();

      articles.forEach(({ slug, title, description, categories }, index) => {
        expect(queryByText(title)).toBeInTheDocument();
        expect(queryByText(description)).toBeInTheDocument();
        expect(queryByTestId(`card-${slug}-${index}`)).toBeInTheDocument();
        expect(queryByTestId(`image-${slug}-${index}`)).toBeInTheDocument();

        categories.forEach((category) => {
          expect(queryByText(category)).toBeInTheDocument();
        })
      });
    });
  });
});