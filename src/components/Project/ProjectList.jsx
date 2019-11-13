import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { animations } from "../../shared/transitions";
import Container from "../Common/Container";
import breakpoints from "../../shared/breakpoints";

const ProjectList = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query ProjectListing {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              client
              slug
              color
              outline
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 100) {
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

  return (
    <ProjectListContainer style={animations.verticleSlide(`15rem`, 0)}>
      <h1>Projects</h1>
      <Grid>
        {allMarkdownRemark.edges.map(({ node }, index) => (
          <ProjectCard
            index={index}
            key={node.frontmatter.slug}
            project={node.frontmatter}
          />
        ))}
      </Grid>
    </ProjectListContainer>
  );
};

const ProjectListContainer = styled(Container)`
  margin-top: 30vh;
  grid-row-gap: 0rem;

  h1 {
    position: relative;
    z-index: 10000;
    transform: translateY(1rem);

    ${breakpoints.desktop} {
      transform: translateY(2rem);
      font-size: 8rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export default ProjectList;
