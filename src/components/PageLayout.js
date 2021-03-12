import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Helmet } from "react-helmet";
import ShortcodeProvider from "./ShortcodeProvider";
import PropTypes from "prop-types";

export const query = graphql`
    query($slug: String!) {
        mdx(slug: {eq: $slug}) {
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

const HomeLayout = ({ data }) => {
	const { body, frontmatter: { title } } = data.mdx;
	return (
		<ShortcodeProvider>
			<>
				<Helmet>
					<meta charSet="utf-8" />
					<title>{title}</title>
				</Helmet>
				<MDXRenderer>{body}</MDXRenderer>
			</>
		</ShortcodeProvider>
	);
};

HomeLayout.propTypes = {
	data: PropTypes.shape({
		mdx: PropTypes.shape({
			body: PropTypes.string,
			frontmatter: PropTypes.shape({
				title: PropTypes.string,
			}),
		})
	}),
};

export default HomeLayout;