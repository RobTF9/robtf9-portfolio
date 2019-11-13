import React from "react";
import styled from "styled-components";
import breakpoints from "../../../shared/breakpoints";
import colors from "../../../shared/colors";
import { animated } from "react-spring";
import { animations } from "../../../shared/transitions";
import Img from "gatsby-image";

const ProjectHero = ({ client, title, color, image }) => {
  return (
    <Hero
      style={animations.horizontalSlide(`-15rem`, 0)}
      color={color}
      client={client}
    >
      <Image fluid={image} />
      <Copy>
        <p>{client}</p>
        <h1>{title}</h1>
      </Copy>
    </Hero>
  );
};

const Hero = styled(animated.header)`
  position: relative;
  grid-column: 1 / -1;
  background-color: ${({ color }) => color};
  color: ${({ client }) =>
    client === "MyEthvault" ? `#02394A` : colors.white};
  height: 40vh;
`;

const Image = styled(Img)`
  position: absolute !important;
  right: 0;
  bottom: 0;
  width: 80vh;
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
