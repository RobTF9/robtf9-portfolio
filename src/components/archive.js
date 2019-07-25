import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const PROJECT_LIST_QUERY = graphql`
  query ProjectList {
    allMarkdownRemark(
      limit: 2
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

const Archive = () => {
  const { allMarkdownRemark } = useStaticQuery(PROJECT_LIST_QUERY);

  return (
    <>
      <aside>
        <h3>Archive:</h3>
        {allMarkdownRemark.edges.map(project => {
          return (
            <div key={project.node.frontmatter.slug}>
              <h4>{project.node.frontmatter.title}</h4>
              <Link to={`/projects${project.node.frontmatter.slug}`}>
                View project
              </Link>
            </div>
          );
        })}
      </aside>
    </>
  );
};

export default Archive;
