import { faker } from '@faker-js/faker';
import { About, Content } from "@type/About";


const mockContent = (params: Partial<Content> = {}): Content => ({
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  icon: {
    svg: {
      content: faker.lorem.paragraph(),
    }
  },
  ...params,
});

const ContentFactory = {
  make: (params?: Partial<Content>): Content => mockContent(params),
  makeMany: (count: number, params?: Partial<Content>): Content[] => Array.from({ length: count }, () => mockContent(params)),
};

const mockData = (params: Partial<About> = {}): About => ({
  about: {
    left: ContentFactory.makeMany(3),
    right: ContentFactory.makeMany(3),
  },
  ...params,
});


export const AboutFactory = {
  make: (params?: Partial<About>): About => mockData(params),
  makeMany: (count: number, params?: Partial<About>): About[] => Array.from({ length: count }, () => mockData(params)),
}