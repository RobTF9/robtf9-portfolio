import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ContentContainer } from "../Common/Container";
import ExperienceCard from "./ExperienceCard";
import { animations } from "../../shared/transitions";
import { FaFilePdf } from "react-icons/fa";
import styled from "styled-components";
import colors from "../../shared/colors";

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
      <Card>
        <h1>Experience</h1>
        <p>Download a copy of my CV below.</p>{" "}
        <a
          href="https://drive.google.com/open?id=1RJqCxU6n1Ceeie98eTTPlcicSkt9BwAo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV <FaFilePdf />
        </a>
      </Card>
      {allMarkdownRemark.edges.map(({ node }) => (
        <ExperienceCard
          key={node.frontmatter.title}
          experience={node.frontmatter}
        />
      ))}
    </ContentContainer>
  );
};

const Card = styled.div`
  margin-bottom: 5rem;
  h1 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 2rem;
  }

  a {
    color: ${colors.blue};

    svg {
      transform: translate(0.75rem, 0.25rem);
    }
  }
`;

export default ExperienceList;
