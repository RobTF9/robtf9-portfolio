import React, { useState } from "react";
import PropTypes from "prop-types";
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

const ProjectCard = ({ project, index }) => {
  return (
    <Card
      index={index + 1}
      color={project.color}
      bg={project.color}
      to={`/projects${project.slug}`}
      aria-label={`Read more about ${project.title}`}
      cover
      direction="right"
    >
      <Container>
        <Copy client={project.client}>
          <Client color={project.color}>{project.client}</Client>
          <h2>{project.title}</h2>
        </Copy>
        <ImageWrapper index={index + 1} client={project.client}>
          <Img fluid={project.featuredimage.childImageSharp.fluid} />
        </ImageWrapper>
        <Button color={project.color} client={project.client}>
          Read more
        </Button>
        <Background color={project.color} />
      </Container>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
