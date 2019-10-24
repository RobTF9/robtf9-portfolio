import React from "react";
import styled from "styled-components";
import breakpoints from "../../../shared/breakpoints";
import { transitions } from "../../../shared/transitions";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const OtherProjects = ({ projects }) => {
  return (
    <OtherProjectList>
      {projects.map(({ node }) => {
        return (
          <AniLink
            key={node.frontmatter.slug}
            to={`/projects${node.frontmatter.slug}`}
            aria-label={`Read more about ${node.frontmatter.title}`}
            cover
            bg={node.frontmatter.color}
            direction="up"
          >
            <Card color={node.frontmatter.color}>
              <p>{node.frontmatter.client}</p>
              <h4>{node.frontmatter.title}</h4>
              <Image
                fluid={node.frontmatter.featuredimage.childImageSharp.fluid}
              />
            </Card>
          </AniLink>
        );
      })}
    </OtherProjectList>
  );
};

export default OtherProjects;

const OtherProjectList = styled.div`
  grid-column: 2 / 12;
  margin-bottom: 5rem;
  display: grid;
  padding-top: 1.5rem;

  ${breakpoints.tablet} {
    padding-top: 5rem;
    grid-column: 3 / 11;
  }

  ${breakpoints.desktop} {
    margin-bottom: 15rem;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 1rem;
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ color }) => color};
  padding: 2rem;
  padding-bottom: 4rem;
  margin-bottom: 2rem;
  transform: translateY(0rem);
  ${transitions.satanSnap};

  &:hover {
    transform: translateY(-2.5rem);
    ${transitions.mediumSnap};
  }

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
  bottom: 0;
  right: 0;
  width: 100%;
`;
