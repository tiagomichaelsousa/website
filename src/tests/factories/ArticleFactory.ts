import { faker } from '@faker-js/faker';
import { Article } from "@type/Article";
import { GatsyImageFactory } from './GatsbyImageFactory';

const mockData = (params: Partial<Article> = {}): Article => ({
  categories: Array.from({ length: 10 }, () => faker.datatype.string()),
  date: faker.date.past().toISOString(),
  description: faker.lorem.paragraph(),
  image: GatsyImageFactory.make(),
  slug: faker.lorem.slug(),
  title: faker.lorem.sentence(),
  ...params,
});


export const ArticleFactory = {
  make: (params?: Partial<Article>): Article => mockData(params),
  makeMany: (count: number, params?: Partial<Article>): Article[] => Array.from({ length: count }, () => mockData(params)),
}