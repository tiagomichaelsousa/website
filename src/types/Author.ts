import { SocialMedia } from '@types/PersonalInfo';
import { ImageDataLike } from 'gatsby-plugin-image';

export type Author = {
  id: string;
  name: string;
  bio: string;
  categories: string[];
  avatar: ImageDataLike;
  company: {
    name: string;
    role: string;
    url: string;
  };
  social: {
    github: SocialMedia;
    linkedin: SocialMedia;
    twitter: SocialMedia;
    medium: SocialMedia;
  };
};
