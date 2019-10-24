import styled from "styled-components";
import breakpoints from "../../shared/breakpoints";
import { animated } from "react-spring";

const Container = styled(animated.div)`
  position: relative;
  grid-column: 2 / 12;
  display: grid;
  grid-row-gap: 8rem;
  margin-bottom: 8rem;

  ${breakpoints.tablet} {
    grid-column: 3 / 11;
  }
`;

export const ContentContainer = styled(Container)`
  grid-row-gap: 2rem;
  margin-top: 30vh;

  ${breakpoints.desktop} {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;

    .full {
      grid-column: span 2;
    }

    h1,
    .left {
      grid-column: span 1;
    }

    article,
    p,
    .right {
      grid-column-start: 2;
    }
  }
`;

export default Container;
