import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <Card color={project.color}>
      <h3>{project.title}</h3>
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
  padding: 3rem 3rem 12rem;
`;

const Button = styled(AniLink)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: calc(100% - 6rem);
  padding: 1.5rem 3rem;
  text-align: right;
  background-color: ${({ bg }) => bg};

  svg {
    margin: 0 0 -0.3rem;
    font-size: 1.6rem;
  }
`;

export default ProjectCard;
