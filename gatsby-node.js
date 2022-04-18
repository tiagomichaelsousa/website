exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const articlesTemplate = require.resolve('./src/templates/article.tsx');

  return graphql(`
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
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: articlesTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      });
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
      authors: [AuthorsYaml] @link(by: "id")
    }
  `;
  createTypes(typeDefs);
};
