const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

// Allow automatic resolution of relative imports in MDX to src folder
exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			modules: [path.resolve(__dirname, "src"), "node_modules"],
		},
	});
};

// https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/#generate-slugs
exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	// you only want to operate on `Mdx` nodes. If you had content from a
	// remote CMS you could also check to see if the parent node was a
	// `File` node here
	if (node.internal.type === "Mdx") {
		const value = createFilePath({ node, getNode });
		createNodeField({
			// Name of the field you are adding
			name: "slug",
			// Individual MDX node
			node,
			// Generated value based on filepath with "blog" prefix. you
			// don't need a separating "/" before the value because
			// createFilePath returns a path with the leading "/".
			value: `/${value}`,
		});
	}
};

// Create pages using generated slugs
exports.createPages = async function ({ actions, graphql }) {
	// Fetch all files with childMdx
	const { data } = await graphql(`
		{
			allFile(filter: { childMdx: { id: { regex: "" } } }) {
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

	// Loop over all file edges
	data.allFile.edges.forEach((edge) => {

		// Extract sourceInstanceName and slug
		const {
			sourceInstanceName,
			childMdx: { slug },
		} = edge.node;

		// Conditionally create those collection pages
		switch (sourceInstanceName) {
			case "activities":
				// Activity detail pages
				actions.createPage({
					path: `/activities/${slug}`,
					component: require.resolve("./src/components/ActivityLayout.js"),
					context: { slug },
				});
				break;
			default:
				actions.createPage({
					path: `/${slug}`,
					component: require.resolve("./src/components/PageLayout.js"),
					context: { slug },
				});
		}
	});
};
