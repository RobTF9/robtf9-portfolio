import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import breakpoints from "../../shared/breakpoints";
import { useSpring, animated, config } from "react-spring";

const ProjectList = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query ProjectListing {
      allMarkdownRemark(limit: 5) {
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
                    ...GatsbyImageSharpFluid_tracedSVG
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
    opacity: 1,
    transform: "translateY(0rem)",
    from: { opacity: 0, transform: "translateY(15rem)" },
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

const Container = styled(animated.div)`
  position: relative;
  grid-column: 2 / 12;
  display: grid;
  grid-row-gap: 8rem;
  margin-bottom: 8rem;

  ${breakpoints.tablet} {
    grid-row-gap: 16rem;
    margin-bottom: 16rem;
  }

  ${breakpoints.desktop} {
    grid-column: 3 / 11;
    grid-row-gap: 24rem;
    margin-bottom: 24rem;
  }
`;
