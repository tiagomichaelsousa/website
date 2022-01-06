import { ImageDataLike } from 'gatsby-plugin-image';

export type PersonalInfo = {
  name: string;
  avatar: ImageDataLike;
  social: {
    github: SocialMedia;
    linkedin: SocialMedia;
    twitter: SocialMedia;
    medium: SocialMedia;
  };
  company: Company;
};

export type SocialMedia = {
  url: string;
  handle: string;
};

type Company = {
  name: string;
  url: string;
  logo: ImageDataLike;
};
