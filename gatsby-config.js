module.exports = {
	siteMetadata: {
		title: "frontend",
	},
	plugins: [
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "activities",
				path: "./content/activities",
			},
			_key: "activities"
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./content/pages",
			},
			_key: "pages"
		},
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				extensions: [".mdx", ".md"],
			},
		},
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-eslint",
		"gatsby-plugin-lint-queries",
		"gatsby-plugin-postcss"
	],
};
