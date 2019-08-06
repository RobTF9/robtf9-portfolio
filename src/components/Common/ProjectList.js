import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import breakpoints from "../../shared/breakpoints";

const LISTING_QUERY = graphql`
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
`;

const ProjectList = () => {
  const { allMarkdownRemark } = useStaticQuery(LISTING_QUERY);
  return (
    <Container>
      {allMarkdownRemark.edges.map(({ node }) => (
        <ProjectCard key={node.frontmatter.slug} project={node.frontmatter} />
      ))}
    </Container>
  );
};

export default ProjectList;

const Container = styled.div`
  position: relative;
  grid-column: 2 / 12;
  display: grid;

  ${breakpoints.desktop} {
    grid-column: 3 / 11;
  }
`;
