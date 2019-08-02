import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../shared/colors";
import { Link } from "gatsby";
import Img from "gatsby-image";
import breakpoints from "../../shared/breakpoints";

const ProjectCard = ({ project }) => {
  return (
    <Card color={project.color}>
      <Container className="container">
        <Copy className="copy">
          <p>{project.client}</p>
          <h2>{project.title}</h2>
          <Link to={`/projects/${project.slug}`}>
            <Button color={project.color}>Read more</Button>
          </Link>
        </Copy>
        <Image>
          <Img fluid={project.featuredimage.childImageSharp.fluid} />
        </Image>
      </Container>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;

const Image = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .gatsby-image-wrapper {
    position: absolute !important;
    bottom: 0;
    width: 100%;
    height: auto;
  }
`;

const Card = styled.article`
  position: relative;
  background-color: ${props => props.color};
  margin-bottom: 15rem;
  padding-top: 40%;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

  &:nth-of-type(2n) {
    .container {
      .copy {
        grid-column: 2;
      }
    }
  }

  ${breakpoints.tablet} {
    margin-bottom: 1rem;

    &:nth-of-type(2n) {
      .container {
        .copy {
          grid-column: 1;
        }
      }
    }
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Copy = styled.div`
  margin: 5rem;
  grid-column: 1;
  grid-row: 1;

  p {
    margin-bottom: 2rem;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  cursor: pointer;
  background-color: ${colors.white};
  color: ${({ color }) => color};
  padding: 2rem 4.5rem;
  transform: translateY(0rem);
  opacity: 0;
  transition: all 0.15s ease-in-out;

  ${Container}:hover & {
    transform: translateY(-5rem);
    opacity: 1;
  }
`;
