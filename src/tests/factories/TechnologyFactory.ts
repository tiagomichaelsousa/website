import { faker } from '@faker-js/faker';
import { Technology } from '@type/Technologies';

const mockData = (params: Partial<Technology> = {}): Technology => ({
  name: faker.name.fullName(),
  color: faker.internet.color(),
  logo: {
    svg: {
      content: faker.lorem.paragraph(),
    }
  },
  url: faker.internet.url(),
  ...params,
});


export const TechnologyFactory = {
  make: (params?: Partial<Technology>): Technology => mockData(params),
  makeMany: (count: number, params?: Partial<Technology>): Technology[] => Array.from({ length: count }, () => mockData(params)),
}