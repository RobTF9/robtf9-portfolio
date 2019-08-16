import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import breakpoints from "../../shared/breakpoints";
import colors from "../../shared/colors";
import Img from "gatsby-image";

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
                <Image
                  fluid={node.frontmatter.featuredimage.childImageSharp.fluid}
                />
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
  display: grid;
  border-top: 0.05rem ${colors.translucent} solid;
  padding-top: 1.5rem;

  ${breakpoints.tablet} {
    padding-top: 5rem;
    grid-template-columns: 1fr 3fr;
  }

  ${breakpoints.desktop} {
    grid-column: 3 / 11;
    grid-template-columns: 1fr 3fr;
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

const Title = styled.p`
  padding-bottom: 1.5rem;
  margin-bottom: 3rem;
  font-weight: 200;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ color }) => color};
  padding: 2rem;
  padding-bottom: 4rem;
  margin-bottom: 2rem;

  p,
  h4 {
    position: relative;
    z-index: 1;
  }

  ${breakpoints.tablet} {
    min-height: 10rem;
    padding-bottom: 0;
  }

  ${breakpoints.desktop} {
    min-height: 20rem;
  }
`;

const Image = styled(Img)`
  position: absolute !important;
  z-index: 0;
  bottom: -65%;
  right: -15%;
  width: 100%;
  opacity: 0.2;
`;
