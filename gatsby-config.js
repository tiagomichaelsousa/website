const rehypeHighlightCode = require('./src/utils/rehype-highlight-code');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteMetadata = {
  siteUrl: 'https://tiagomichaelsousa.dev',
  title: 'tiagomichaelsousa',
  description: 'welcome to my personal website 👋',
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-netlify',
    '@paulkre/gatsby-transformer-svg',
    'gatsby-transformer-yaml',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        canonical: siteMetadata.siteUrl,
        openGraph: {
          title: siteMetadata.title,
          description: siteMetadata.description,
          canonical: siteMetadata.siteUrl,
          type: 'website',
          locale: 'en_IE',
          url: siteMetadata.siteUrl,
          site_name: siteMetadata.title,
          article: {
            authors: [`${siteMetadata.title}`],
            tags: ['blog', 'website', 'tiagomichaelsousa'],
            publishedTime: '2022-01-01T18:00:00.000Z',
          },
          images: [
            {
              url: `${siteMetadata.siteUrl}/images/SEO.png`,
              width: 1200,
              height: 627,
              alt: siteMetadata.description,
            },
          ],
        },
        twitter: {
          handle: '@tmichaelsousa',
          site: '@tmichaelsousa',
          cardType: 'summary_large_image',
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data/',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        rehypePlugins: [rehypeHighlightCode],
        plugins: ['gatsby-remark-images'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900,
              quality: 80,
              linkImagesToOriginal: false,
              withWebp: { quality: 80 },
              withAvif: { quality: 80 },
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static-images',
        path: 'static/images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: './data/',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          'components': './src/components/',
          '@components': './src/components/',
          '@utils': './src/utils/',
          '@sections': './src/sections/',
          '@pages': './src/pages/',
          '@theme': './src/theme/',
          '@images': './src/images/',
          '@hooks': './src/hooks/',
          '@types': './src/types/',
        },
        extensions: ['tsx', 'ts'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: ['**/*.{css,scss,less}', '**/*.{json,json5}', '**/*.{graphql}', '**/*.{md,mdx}', '**/*.{html}', '**/*.{yaml,yml}'],
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
  ],
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorsYaml',
  },
};
