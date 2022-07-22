const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const articlesTemplate = require.resolve('./src/templates/article.tsx');

  const result = await graphql(`
    {
      allMdx(filter: { frontmatter: { slug: { regex: "/articles/" } } }, sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const articlesListTemplate = require.resolve('./src/templates/articles.tsx');

  paginate({
    createPage,
    items: result.data.allMdx.edges,
    itemsPerPage: 3,
    pathPrefix: '/articles',
    component: articlesListTemplate
  });

    return result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
        path: node.frontmatter.slug,
        component: articlesTemplate,
        context: {
            slug: node.frontmatter.slug,
        },
        });
    });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      authors: [AuthorsYaml] @link(by: "yamlId")
    }
  `;
  createTypes(typeDefs);
};
