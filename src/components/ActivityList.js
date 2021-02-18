import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

const ActivityList = () => {

	// Get activities
	const data = useStaticQuery(graphql`
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
    `);

	// Extract nodes
	const [...nodes] = data.allFile.edges.map((edge) => edge.node.childMdx);

	return (
		<>
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
};

export default ActivityList;