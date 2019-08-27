import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectCard from "./ProjectCard";
import { useSpring, config } from "react-spring";
import Container from "../Common/Container";

const ProjectList = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query ProjectListing {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              client
              slug
              color
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 1300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const animation = useSpring({
    transform: "translate3d(0, 0rem, 0)",
    from: { transform: "translate3d(0, 15rem, 0)" },
    config: config.molasses,
  });

  return (
    <Container style={animation}>
      {allMarkdownRemark.edges.map(({ node }) => (
        <ProjectCard key={node.frontmatter.slug} project={node.frontmatter} />
      ))}
    </Container>
  );
};

export default ProjectList;
