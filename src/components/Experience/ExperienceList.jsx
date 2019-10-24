import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ContentContainer } from "../Common/Container";
import ExperienceCard from "./ExperienceCard";
import { animations } from "../../shared/transitions";

const ExperienceList = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query ExperienceListQuery {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        filter: { fileAbsolutePath: { regex: "/experience/" } }
      ) {
        edges {
          node {
            frontmatter {
              order
              title
              to
              from
              current
              role
              description
            }
          }
        }
      }
    }
  `);
  return (
    <ContentContainer style={animations.verticleSlide(`15rem`, 0)}>
      <h1>Experience</h1>
      {allMarkdownRemark.edges.map(({ node }) => (
        <ExperienceCard
          key={node.frontmatter.title}
          experience={node.frontmatter}
        />
      ))}
    </ContentContainer>
  );
};

export default ExperienceList;
