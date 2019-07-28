import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

const ProjectCard = ({ client, title, slug, color }) => {
  return (
    <Card color={color}>
      <Container className="container">
        <Copy className="copy">
          <h4>{client}</h4>
          <h1>{title}</h1>
          <Link to={`/projects/${slug}`}>Read more</Link>
        </Copy>
        <div className="image"></div>
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

  h4 {
    margin-bottom: 2rem;
  }
`;
