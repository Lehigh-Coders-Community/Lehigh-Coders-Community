const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/${value}`,
    })
  }
}

exports.createPages = async function({ actions, graphql }) {
    // Fetch all mdx
    const { data } = await graphql(`
        {
            allFile(filter: { childMdx: {id: {regex: ""}}}) {
                edges {
                    node {
                        childMdx {
                            id
                            slug
                            frontmatter {
                                slug
                            }
                        }
                        sourceInstanceName
                    }
                }
            }
        }
    `);

    // Create activity pages
    data.allFile.edges.forEach((edge) => {
        const { sourceInstanceName, childMdx: { id, slug } } = edge.node;

        switch(sourceInstanceName) {
            case "activities":
                // Activity detail pages
                actions.createPage({
                    path: `/activities/${slug}`,
                    component: require.resolve(`./src/components/ActivityLayout.js`),
                    context: { slug }
                })
                break;
            default:
                console.log("Home page with slug", slug);
                if(slug == "index") {
                    // Home page
                    actions.createPage({
                        path: `/`,
                        component: require.resolve(`./src/components/PageLayout.js`),
                        context: { slug: "/" }
                    })
                } else {
                    // All other pages
                    actions.createPage({
                        path: `/${slug}`,
                        component: require.resolve(`./src/components/PageLayout.js`),
                        context: { slug }
                    })
                }
                
        }
        
    });
}
