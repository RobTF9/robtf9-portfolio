import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useSpring, config } from "react-spring";
import styled from "styled-components";
import Container from "../Common/Container";
import ExperienceCard from "./ExperienceCard";
import breakpoints from "../../shared/breakpoints";

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

  const animation = useSpring({
    transform: "translate3d(0, 0rem, 0)",
    from: { transform: "translate3d(0, 15rem, 0)" },
    config: config.molasses,
  });

  return (
    <ExperienceContainer style={animation}>
      {allMarkdownRemark.edges.map(({ node }) => (
        <ExperienceCard
          key={node.frontmatter.title}
          experience={node.frontmatter}
        />
      ))}
    </ExperienceContainer>
  );
};

export default ExperienceList;

const ExperienceContainer = styled(Container)`
  grid-gap: 3rem;

  ${breakpoints.tablet} {
    grid-gap: 3rem;
  }

  ${breakpoints.desktop} {
    grid-gap: 3rem;
    grid-column: 7 / 11;
  }
`;
