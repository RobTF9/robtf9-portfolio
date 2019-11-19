import React from "react";
import styled from "styled-components";
import breakpoints from "../../../shared/breakpoints";
import { transitions } from "../../../shared/transitions";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import colors from "../../../shared/colors";

const OtherProjects = ({ projects }) => {
  return (
    <>
      <OtherProjectList>
        {projects.map(({ node }) => {
          return (
            <AniLink
              key={node.frontmatter.slug}
              to={`/projects${node.frontmatter.slug}`}
              aria-label={`Read more about ${node.frontmatter.title}`}
              cover
              bg={node.frontmatter.color}
              direction="right"
            >
              <Card
                client={node.frontmatter.client}
                color={node.frontmatter.color}
              >
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
    </>
  );
};

export default OtherProjects;

const OtherProjectList = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 0rem;
  display: grid;
  grid-row-gap: 0;

  ${breakpoints.tablet} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ color }) => color};
  color: ${({ client }) =>
    client === "MyEthvault" ? `#02394A` : colors.white};
  padding: 2rem;
  padding-bottom: 4rem;
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
    min-height: 20rem;
  }
`;

const Image = styled(Img)`
  position: absolute !important;
  z-index: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  opacity: 0.25;
`;
