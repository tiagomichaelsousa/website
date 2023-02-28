import { faker } from '@faker-js/faker';
import { SiteMetadata } from "@type/SiteMetadata";

const mockData = (params: Partial<SiteMetadata> = {}): SiteMetadata => ({
  description: faker.lorem.sentence(),
  title: faker.lorem.sentence(),
  siteUrl: faker.internet.url(),
  ...params,
});


export const SiteMetadataFactory = {
  make: (params?: Partial<SiteMetadata>): SiteMetadata => mockData(params),
  makeMany: (count: number, params?: Partial<SiteMetadata>): SiteMetadata[] => Array.from({ length: count }, () => mockData(params)),
}