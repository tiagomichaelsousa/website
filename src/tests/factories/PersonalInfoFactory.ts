import { faker } from '@faker-js/faker';
import { PersonalInfo } from "@type/PersonalInfo";
import { GatsyImageFactory } from './GatsbyImageFactory';

const mockData = (params: Partial<PersonalInfo> = {}): PersonalInfo => ({
  name: faker.name.fullName(),
  avatar: {
    childImageSharp: {
      gatsbyImageData:  GatsyImageFactory.make(),
    }
  },
  company: {
    name: faker.company.name(),
    url: faker.internet.url(),
    logo: {
      childImageSharp: {
        gatsbyImageData: GatsyImageFactory.make(),
      }
    }
  },
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


export const PersonalInfoFactory = {
  make: (params?: Partial<PersonalInfo>): PersonalInfo => mockData(params),
  makeMany: (count: number, params?: Partial<PersonalInfo>): PersonalInfo[] => Array.from({ length: count }, () => mockData(params)),
}