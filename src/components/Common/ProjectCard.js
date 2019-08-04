import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../shared/colors";
import { Link } from "gatsby";
import Img from "gatsby-image";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.slug}`}>
      <Card color={project.color}>
        <Copy className="copy">
          <p>{project.client}</p>
          <h2>{project.title}</h2>
        </Copy>
        <Img fluid={project.featuredimage.childImageSharp.fluid} />
        <ReadMore color={project.color}>Read more</ReadMore>
      </Card>
    </Link>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;

const Card = styled.article`
  position: relative;
  cursor: pointer;
  background-color: ${props => props.color};
  margin: 0 3rem 8rem 3rem;
  padding: 4rem 2rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
`;

const Copy = styled.div`
  margin-bottom: 4rem;
`;

const ReadMore = styled.p`
  background-color: ${colors.white};
  color: ${({ color }) => color};
  padding: 1.5rem 5rem;
  margin-top: 4rem;
  font-weight: 600;
  text-align: center;
`;
