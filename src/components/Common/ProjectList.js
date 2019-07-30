import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";

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
                  ...GatsbyImageSharpFluid
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
        <ProjectCard
          key={node.frontmatter.slug}
          client={node.frontmatter.client}
          color={node.frontmatter.color}
          title={node.frontmatter.title}
          slug={node.frontmatter.slug}
          image={node.frontmatter.featuredimage.childImageSharp.fluid}
        />
      ))}
    </Container>
  );
};

export default ProjectList;

const Container = styled.div`
  position: relative;
  grid-column: 3 / 11;
  display: grid;
`;
