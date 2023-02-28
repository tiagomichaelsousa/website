import { useStaticQuery } from 'gatsby';
import { ArticleFactory } from '@tests/factories/ArticleFactory';
import useLatestArticles from './useLatestArticles';

jest.mock('gatsby', () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn(),
}));

describe('useLatestArticles', () => {
  it('should return the articles data', () => {
    const articles = ArticleFactory.makeMany(10);

    const data = {
      allMdx: {
        edges: articles.map((article) => ({ node: { frontmatter: article } })),
      },
    };

    (useStaticQuery as jest.Mock).mockImplementation(() => data);

    expect(useLatestArticles()).toEqual(articles);
    expect(useStaticQuery).toBeCalledTimes(1);
  });
});