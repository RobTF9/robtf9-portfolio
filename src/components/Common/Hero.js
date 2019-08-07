import React from "react";
import styled from "styled-components";
import colors from "../../shared/colors";
import breakpoints from "../../shared/breakpoints";
import { useSpring, animated, config } from "react-spring";

const Hero = ({ children }) => {
  const animation = useSpring({
    opacity: 1,
    transform: "translateY(0rem)",
    from: { opacity: 0, transform: "translateY(15rem)" },
    config: config.molasses,
    delay: 250,
  });

  return (
    <Container style={animation}>
      <Text>
        <h1>{children}</h1>
      </Text>
    </Container>
  );
};

export default Hero;

const Container = styled(animated.header)`
  position: relative;
  grid-column: 2 / 12;
  height: 15vh;
  margin-top: 10vh;

  ${breakpoints.tablet} {
    grid-column: 3 / 11;
    height: 10vh;
  }

  ${breakpoints.desktop} {
    margin-top: 15vh;
    height: 20vh;
  }
`;

const Text = styled.div`
  position: relative;

  ${breakpoints.desktop} {
    width: 60%;
  }

  h4 {
    margin-bottom: 1rem;
    color: ${colors.blue};
  }

  h1 {
    span {
      color: ${colors.blue};
    }
  }
`;
