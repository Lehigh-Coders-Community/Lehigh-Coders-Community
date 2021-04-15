import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Card from "./Card";

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
						<Card title={node.frontmatter.title} subtitle={node.frontmatter.date}>
							<p>{node.frontmatter.description}</p>
						</Card>
					</article>
				</Link>
			))}
		</>
	);
};

export default ActivityList;