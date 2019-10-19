import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import ProjectCard from "./ProjectCard.js";
import { animations } from "../../shared/transitions";
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

  return (
    <ProjectListContainer style={animations.verticleSlide(`15rem`, 0)}>
      <h1>Projects</h1>
      {allMarkdownRemark.edges.map(({ node }) => (
        <ProjectCard key={node.frontmatter.slug} project={node.frontmatter} />
      ))}
    </ProjectListContainer>
  );
};

const ProjectListContainer = styled(Container)`
  margin-top: 30vh;
`;

export default ProjectList;
