import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const CardWrapper = styled.article`
  position: relative;
  background-color: ${props => props.color};
  margin-bottom: 15rem;
  padding-top: 40%;

  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .copy {
      margin: 5rem;
      grid-column: 1;
      grid-row: 1;

      h4 {
        margin-bottom: 2rem;
      }
    }
  }

  &:nth-of-type(2n) {
    .container {
      .copy {
        grid-column: 2;
      }
    }
  }
`;

const ProjectCard = ({ client, title, slug, color }) => {
  return (
    <CardWrapper color={color}>
      <div className="container">
        <div className="copy">
          <h4>{client}</h4>
          <h1>{title}</h1>
          <Link to={slug}>Read more</Link>
        </div>
        <div className="image"></div>
      </div>
    </CardWrapper>
  );
};

export default ProjectCard;
