// import { graphql } from "gatsby";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import ShortcodeProvider from "./ShortcodeProvider";

export const query = graphql`
	query($slug: String!) {
		mdx(slug: { eq: $slug }) {
			id
			body
				frontmatter {
				date
				description
				title
			}
		}
	}
`;

const ActivityLayout = ({ data }) => {
	const {
		body,
		frontmatter: { title },
	} = data.mdx;
	return (
		<ShortcodeProvider>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{title}</title>
			</Helmet>
			<small>(this is from the activity layout)</small>
			<Link to="/activities">All Activities</Link>
			<MDXRenderer>{body}</MDXRenderer>
		</ShortcodeProvider>
	);
};

ActivityLayout.propTypes = {
	data: PropTypes.shape({
		mdx: PropTypes.shape({
			body: PropTypes.string,
			frontmatter: PropTypes.shape({
				title: PropTypes.string,
			}),
		})
	}),
};

export default ActivityLayout;
