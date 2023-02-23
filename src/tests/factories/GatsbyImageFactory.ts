import { faker } from '@faker-js/faker';
import { IGatsbyImageData } from 'gatsby-plugin-image';

const mockData = (params: Partial<IGatsbyImageData> = {}): IGatsbyImageData => ({
  backgroundColor: faker.internet.color(),
  images: {
    fallback: {
      src: faker.image.imageUrl(),
    },
  },
  layout: 'fixed',
  height: faker.datatype.number(),
  width: faker.datatype.number(),
  ...params,
});


export const GatsyImageFactory = {
  make: (params?: Partial<IGatsbyImageData>): IGatsbyImageData => mockData(params),
  makeMany: (count: number, params?: Partial<IGatsbyImageData>): IGatsbyImageData[] => Array.from({ length: count }, () => mockData(params)),
}