import Article from './article';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { faker } from '@faker-js/faker';
import { HelmetProvider } from 'react-helmet-async';
import { PersonalInfoFactory } from '@tests/factories/PersonalInfoFactory';
import { ArticleQueryFactory } from '@tests/factories/ArticleQueryFactory';

jest.mock('@hooks/useAllowedTokens');

const article = ArticleQueryFactory.make();
jest.mock('gatsby', () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn().mockImplementation(() => article),
}));

jest.mock('@hooks/useTheme', () => {
  return jest.fn().mockImplementation(() => ({
    handleThemeChange: jest.fn(),
    theme: 'light',
  }));
});

const siteUrl = faker.internet.url();
jest.mock('@hooks/useSiteMetadata', () => {
  return jest.fn().mockImplementation(() => ({
    siteUrl,
  }));
});

jest.mock('@hooks/usePersonalInfo', () => {
  return jest.fn().mockImplementation(() => PersonalInfoFactory.make());
});

jest.mock('@mdx-js/react', () => ({
  ...jest.requireActual('@mdx-js/react'),
  MDXProvider: jest.fn().mockImplementation(() => <div data-testid="mdx-provider"></div>),
}));

// jest.spyOn(allComponents, 'MDXProvider').mockImplementation(() => (
//   <div data-testid="mdx-renderer"></div>
// ));

// jest.spyOn(allComponents, 'mdx').mockImplementation(() => (
//   <div data-testid="mdx-renderer"></div>
// ));

const twitterHandles = article.frontmatter.authors.map((author) => author.social.twitter.handle).join(', ')

describe('Article', () => {
  it('should render correctly', async () => {
    const { queryByTestId, queryByText } = render(
      <HelmetProvider>
        <RecoilRoot>
          <Article data={{ mdx: article }} />
        </RecoilRoot>
      </HelmetProvider>
    );

    const { frontmatter: { title, description } } = article;

    expect(queryByTestId('article')).toBeInTheDocument();
    expect(queryByTestId('mdx-provider')).toBeInTheDocument();
    expect(queryByText(title)).toBeInTheDocument();
    expect(queryByText(description)).toBeInTheDocument();
  });

  it('should set head correctly', async () => {
    render(
      <HelmetProvider>
        <RecoilRoot>
          <Article data={{ mdx: article }} />
        </RecoilRoot>
      </HelmetProvider>
    );

    const { excerpt, frontmatter: { title, authors, categories, date } } = article;

    expect(document.head.querySelector("meta[name='description']")?.getAttribute('content')).toEqual(excerpt);
    expect(document.head.querySelector("meta[property='og:description']")?.getAttribute('content')).toEqual(excerpt);
    expect(document.head.querySelector("meta[property='og:title']")?.getAttribute('content')).toEqual(title);

    const authorsElems = document.head.querySelectorAll("meta[property='article:author']");
    expect(authorsElems.length).toEqual(authors.length);
    Array.from(authorsElems.entries()).forEach(([index, value]) => {
      expect(value.getAttribute('content')).toEqual(authors[index].name);
    })

    const categoriesElems = document.head.querySelectorAll("meta[property='article:tag']");
    expect(categoriesElems.length).toEqual(categories.length);
    Array.from(categoriesElems.entries()).forEach(([index, value]) => {
      expect(value.getAttribute('content')).toEqual(categories[index]);
    })

    expect(document.head.querySelector("meta[property='article:published_time']")?.getAttribute('content')).toEqual(date);
    expect(document.head.querySelector("meta[property='article:modified_time']")?.getAttribute('content')).toEqual(date);
  });

  it('should render correctly categoties', async () => {
    const { queryByText } = render(
      <HelmetProvider>
        <RecoilRoot>
          <Article data={{ mdx: article }} />
        </RecoilRoot>
      </HelmetProvider>
    );

    const { frontmatter: { categories } } = article;

    categories.forEach((category) => {
      expect(queryByText(category)).toBeInTheDocument();
    });
  });

  it('should render correctly giscus and share buttons', async () => {
    const { container } = render(
      <HelmetProvider>
        <RecoilRoot>
          <Article data={{ mdx: article }} />
        </RecoilRoot>
      </HelmetProvider>
    );

    const { frontmatter: { slug, title }, filepath } = article;

    expect(container.querySelector('giscus-widget')).toBeInTheDocument();

    expect(container.querySelector(`[href='https://twitter.com/intent/tweet?url=${siteUrl}/${slug}&text=I+just+read+%22${title}%22+by+${twitterHandles}%0A']`)).toBeInTheDocument();
    expect(container.querySelector(`[href='https://twitter.com/search?q=${title}']`)).toBeInTheDocument();
    expect(container.querySelector(`[href='https://github.com/tiagomichaelsousa/website/edit/main/data/${filepath}.mdx']`)).toBeInTheDocument();
  })

  it('should render correctly socials', async () => {
    const { container, getByTitle } = render(
      <HelmetProvider>
        <RecoilRoot>
          <Article data={{ mdx: article }} />
        </RecoilRoot>
      </HelmetProvider>
    );

    const { frontmatter: { authors } } = article;

    
    const authorNames = container.querySelectorAll("[data-testid='heading-author-name']");
    Array.from(authorNames).forEach((authorName, index) => {
      expect(authorName.innerHTML).toEqual(authors[index].name);
    });

    authors.forEach(({ social }) => {
      expect(getByTitle(social.github.url)).toBeInTheDocument();
      expect(getByTitle(social.twitter.url)).toBeInTheDocument();
      expect(getByTitle(social.medium.url)).toBeInTheDocument();
      expect(getByTitle(social.linkedin.url)).toBeInTheDocument();
    })
  });
});