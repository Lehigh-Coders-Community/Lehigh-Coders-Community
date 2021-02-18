// import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "./Layout";

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

const ActivityLayout = ({ data }) => {
    const { body, frontmatter: {title, date, description}} = data.mdx;
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <MDXRenderer>{body}</MDXRenderer>
        </>
    );
}

export default ActivityLayout;