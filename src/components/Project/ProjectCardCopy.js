import React from "react";
import { animated } from "react-spring";
import styled from "styled-components";
import breakpoints from "../../shared/breakpoints";

const ProjectCardCopy = ({ color, animation, client, title }) => {
  return (
    <Copy
      color={color}
      style={{
        transform: animation.y.interpolate(y => `translate3d(0, -${y}rem, 0)`),
        opacity: animation.o,
      }}
    >
      <h4>{client}</h4>
      <h2>{title}</h2>
    </Copy>
  );
};

export default ProjectCardCopy;

const Copy = styled(animated.div)`
  width: 100%;
  h4 {
    color: ${({ color }) => color};
    font-weight: 400;
  }
  ${breakpoints.tablet} {
    width: 80%;
  }
  ${breakpoints.desktop} {
    margin-bottom: 0;
    padding-bottom: 4rem;
    width: 40%;
  }
`;
