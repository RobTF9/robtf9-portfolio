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

export default Container;
