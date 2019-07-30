import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../shared/colors";
import { Link } from "gatsby";
import Img from "gatsby-image";

const ProjectCard = ({ client, title, slug, color, image }) => {
  return (
    <Card color={color}>
      <Container className="container">
        <Copy className="copy">
          <p>{client}</p>
          <h2>{title}</h2>
          <Link to={`/projects/${slug}`}>
            <Button color={color}>Read more</Button>
          </Link>
        </Copy>

        <div className="image">
          <Img fluid={image} />
        </div>
      </Container>
    </Card>
  );
};

ProjectCard.propTypes = {
  client: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProjectCard;

const Card = styled.article`
  position: relative;
  background-color: ${props => props.color};
  margin-bottom: 15rem;
  padding-top: 40%;

  &:nth-of-type(2n) {
    .container {
      .copy {
        grid-column: 2;
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
