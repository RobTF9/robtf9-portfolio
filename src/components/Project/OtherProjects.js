import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const OtherProjects = ({ projects }) => {
  return (
    <OtherProjectList>
      <Title>Other projects</Title>
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
    </OtherProjectList>
  );
};

export default OtherProjects;

const OtherProjectList = styled.div`
  grid-column: 2 / 12;
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
