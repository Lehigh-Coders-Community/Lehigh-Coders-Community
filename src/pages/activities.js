import { graphql, Link } from "gatsby";
import React from "react";

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "activities"}}) {
            edges {
              node {
                childMdx {
                  frontmatter {
                    title
                    description
                    date(fromNow: true)
                  }
                  slug
                }
              }
            }
          }
    }
`;

const ActivitiesPage = ({ data }) => {
    console.log(data);
    const [...nodes] = data.allFile.edges.map((edge) => edge.node.childMdx);
    console.log(nodes);
    return (
        <>
            <h1>Activities</h1>
            {nodes.map(node => (
                <Link to={`/activities/${node.slug}`} key={node.slug}>
                    <article>
                        <h2>{node.frontmatter.title}</h2>
                        <small>{node.frontmatter.date}</small>
                        <p>{node.frontmatter.description}</p>
                    </article>
                </Link>
            ))}
        </>
    );
}

export default ActivitiesPage;