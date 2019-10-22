import React from "react";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import Img from "gatsby-image";
import {
  Card,
  Copy,
  Client,
  Button,
  ImageWrapper,
  Container,
  Background,
} from "./ProjectCardStyles";

const ProjectCard = ({ project }) => {
  return (
    <Card color={project.color}>
      <Container>
        <Copy>
          <Client color={project.color}>{project.client}</Client>
          <h3>{project.title}</h3>
          <Button
            to={`/projects${project.slug}`}
            aria-label={`Read more about ${project.title}`}
            cover
            color={project.color}
            direction="down"
          >
            Read more <FaArrowRight />
          </Button>
        </Copy>
        <ImageWrapper color={project.color}>
          <Img fluid={project.featuredimage.childImageSharp.fluid} />
        </ImageWrapper>
        <Background color={project.color} />
      </Container>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
