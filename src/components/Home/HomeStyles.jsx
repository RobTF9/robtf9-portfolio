import { animated } from "react-spring";
import styled from "styled-components";
import breakpoints from "../../shared/breakpoints";
import Div100vh from "react-div-100vh";

export const HomeContainer = styled(Div100vh)`
  position: relative;
  grid-column: 2 / 12;
  display: grid;
  grid-row-gap: 8rem;
  margin-bottom: 8rem;
  display: flex;
  align-items: center;
  margin-bottom: 0rem;

  ${breakpoints.tablet} {
    grid-column: 3 / 11;
  }
`;

export const Text = styled(animated.div)`
  p {
    margin: 1rem 0 5rem 0;

    ${breakpoints.desktop} {
      margin: 1rem 0 8rem 0;
    }
  }
`;

export const Image = styled(animated.div)`
  position: fixed !important;
  bottom: -100vh;
  right: 0;
  width: 50%;
  padding-top: 50%;

  .gatsby-image-wrapper {
    position: absolute !important;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  ${breakpoints.desktop} {
    width: 30%;
    margin-right: calc(12vh);
  }
`;
