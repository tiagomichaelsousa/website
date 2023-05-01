import { faker } from '@faker-js/faker';
import { ArticlePageProps } from 'src/templates/article';
import { AuthorFactory } from './AuthorFactory';

const mockData = (params: Partial<ArticlePageProps> = {}): ArticlePageProps => ({
  body: "",
  excerpt: faker.lorem.paragraph(),
  filepath: faker.lorem.slug(),
  timeToRead: faker.datatype.number(),
  frontmatter: {
    categories: Array.from({ length: 2 }, () => faker.datatype.string()),
    authors: AuthorFactory.makeMany(2),
    date: faker.date.past().toISOString(),
    description: faker.lorem.paragraph(),
    dateFormated: faker.date.past().toISOString(),
    slug: faker.lorem.slug(),
    title: faker.lorem.sentence(),
  },
  wordCount: {
    paragraphs: faker.datatype.number(),
    sentences: faker.datatype.number(),
    words: faker.datatype.number(),
  },
  ...params,
});


export const ArticleQueryFactory = {
  make: (params?: Partial<ArticlePageProps>): ArticlePageProps => mockData(params),
  makeMany: (count: number, params?: Partial<ArticlePageProps>): ArticlePageProps[] => Array.from({ length: count }, () => mockData(params)),
}