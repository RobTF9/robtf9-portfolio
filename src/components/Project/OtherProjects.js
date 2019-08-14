import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import breakpoints from "../../shared/breakpoints";

const OtherProjects = ({ projects }) => {
  return (
    <OtherProjectList>
      <Title>Other projects</Title>
      <Container>
        {projects.map(({ node }) => {
          return (
            <Link
              key={node.frontmatter.slug}
              to={`/projects${node.frontmatter.slug}`}
            >
              <Card color={node.frontmatter.color}>
                <p>{node.frontmatter.client}</p>
                <h4>{node.frontmatter.title}</h4>
              </Card>
            </Link>
          );
        })}
      </Container>
    </OtherProjectList>
  );
};

export default OtherProjects;

const OtherProjectList = styled.div`
  grid-column: 2 / 12;
  margin-bottom: 5rem;

  ${breakpoints.desktop} {
    grid-column: 3 / 11;
  }
`;

const Container = styled.div`
  display: grid;

  ${breakpoints.desktop} {
    margin-bottom: 15rem;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
  }
`;

const Title = styled.h3`
  margin-bottom: 2.5rem;
`;

const Card = styled.div`
  position: relative;
  cursor: pointer;
  background-color: ${({ color }) => color};
  padding: 2rem;
  margin-bottom: 2rem;
`;
