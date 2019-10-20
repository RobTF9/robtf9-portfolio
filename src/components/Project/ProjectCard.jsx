import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FaArrowRight } from "react-icons/fa";
import breakpoints from "../../shared/breakpoints";
import { transitions } from "../../shared/transitions";

const ProjectCard = ({ project }) => {
  return (
    <Card color={project.color}>
      <Copy>
        <h3>{project.title}</h3>
        <Client color={project.color}>{project.client}</Client>
        <p>{project.outline}</p>
      </Copy>
      {/* <Image fluid={project.featuredimage.childImageSharp.fluid} /> */}
      <Button
        to={`/projects${project.slug}`}
        aria-label={`Read more about ${project.title}`}
        cover
        bg={project.color}
        direction="down"
      >
        Read more <FaArrowRight />
      </Button>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

const Card = styled.article`
  position: relative;
  border: 0.1rem ${({ color }) => color} solid;
  padding: 4rem 4rem 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
`;

const Copy = styled.div`
  h3 {
    margin-bottom: 2rem;
  }
`;

const Client = styled.p`
  font-weight: 900;
  margin-bottom: 2rem;
  color: ${({ color }) => color};
`;

const Image = styled(Img)``;

const Button = styled(AniLink)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: calc(100% - 8rem);
  padding: 1.5rem 4rem;
  text-align: right;
  background-color: ${({ bg }) => bg};

  svg {
    margin: 0 0 -0.3rem;
    font-size: 1.6rem;
    transform: translate3d(0.5rem, 0, 0);
    ${transitions.quickSnap}
  }

  ${breakpoints.tablet} {
    &:hover {
      svg {
        transform: translate3d(1rem, 0, 0);
        ${transitions.quickSnap}
      }
    }
  }
`;

export default ProjectCard;
