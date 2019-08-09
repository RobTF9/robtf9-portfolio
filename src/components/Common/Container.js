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
    grid-row-gap: 16rem;
    margin-bottom: 16rem;
  }

  ${breakpoints.desktop} {
    grid-row-gap: 24rem;
    margin-bottom: 24rem;
  }
`;

export default Container;
