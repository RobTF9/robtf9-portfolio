import { animated } from "react-spring";
import Container from "../Common/Container";
import styled from "styled-components";
import breakpoints from "../../shared/breakpoints";

export const HomeContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  height: ${({ height }) => height}px;
  margin-bottom: 0rem;

  ${breakpoints.tablet} {
    margin-bottom: 0rem;
  }

  ${breakpoints.desktop} {
    margin-bottom: 0rem;
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
