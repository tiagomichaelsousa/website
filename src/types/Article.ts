import { ImageDataLike } from 'gatsby-plugin-image';

export type Article = {
  slug: string;
  date: string;
  title: string;
  categories: string[];
  image: ImageDataLike;
  description: string;
};

export type GatsbyArticle = {
  allMdx: {
    edges: {
      node: {
        frontmatter: Article;
      }
    }[]
  }
}