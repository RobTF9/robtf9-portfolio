import { animated } from "react-spring";
import Container from "../Common/Container";
import styled from "styled-components";
import colors from "../../shared/colors";
import breakpoints from "../../shared/breakpoints";

export const HomeContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 100vh;
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
  position: absolute !important;
  bottom: 0;
  right: 0;
  width: 50%;

  .gatsby-image-wrapper {
    position: absolute !important;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  ${breakpoints.desktop} {
    width: 40%;
  }
`;
