import { faker } from '@faker-js/faker';
import { Author } from "@type/Author";
import { GatsyImageFactory } from './GatsbyImageFactory';

const mockData = (params: Partial<Author> = {}): Author => ({
  avatar: GatsyImageFactory.make(),
  bio: faker.lorem.paragraph(),
  name: faker.name.firstName(),
  company: {
    name: faker.company.name(),
    url: faker.internet.url(),
    role: faker.name.jobTitle(),
  },
  id: faker.datatype.uuid(),
  social: {
    github: {
      handle: faker.internet.userName(),
      url: faker.internet.url(),
    },
    linkedin: {
      handle: faker.internet.userName(),
      url: faker.internet.url(),
    },
    twitter: {
      handle: faker.internet.userName(),
      url: faker.internet.url(),
    },
    medium: {
      handle: faker.internet.userName(),
      url: faker.internet.url(),
    },
  },
  ...params,
});


export const AuthorFactory = {
  make: (params?: Partial<Author>): Author => mockData(params),
  makeMany: (count: number, params?: Partial<Author>): Author[] => Array.from({ length: count }, () => mockData(params)),
}