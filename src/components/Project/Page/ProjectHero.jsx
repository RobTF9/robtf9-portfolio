import React from "react";
import styled from "styled-components";
import breakpoints from "../../../shared/breakpoints";

const ProjectHero = ({ client, title, color }) => {
  return (
    <Hero color={color}>
      <Copy>
        <p>{client}</p>
        <h1>{title}</h1>
      </Copy>
    </Hero>
  );
};

const Hero = styled.header`
  position: relative;
  grid-column: 1 / -1;
  background-color: ${({ color }) => color};
  height: 40vh;
`;

const Copy = styled.div`
  position: absolute;
  left: calc(100vw / 12);
  bottom: -1rem;

  ${breakpoints.tablet} {
    left: calc((100vw / 12) * 2);
  }

  ${breakpoints.desktop} {
    bottom: -2rem;

    h1 {
      font-size: 8rem;
    }

    p {
      margin-bottom: -0.5rem;
    }
  }
`;

export default ProjectHero;
