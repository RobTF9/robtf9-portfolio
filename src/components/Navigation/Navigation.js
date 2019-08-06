import React from "react";
import styled from "styled-components";
import colors from "../../shared/colors";
import NavLink from "./NavLink";
import { useSpring, animated, config } from "react-spring";

const Navigation = ({ animation, visible, toggle }) => {
  const subAnimation = useSpring({
    transform: `translateY(${visible ? 0 : -50}vh)`,
    opacity: visible ? 1 : 0,
    config: config.slow,
  });

  return (
    <Nav
      style={{
        transform: animation.negative.interpolate(y => `translateY(${-y}vh)`),
      }}
    >
      <Container style={subAnimation}>
        <NavLink toggle={toggle} text="Home" to="/" />
        <NavLink toggle={toggle} text="Projects" to="/projects" />
        <NavLink toggle={toggle} text="Experience" to="/experience" />
        <NavLink toggle={toggle} text="About" to="/about" />
        <NavLink toggle={toggle} text="Contact" to="/contact" />
      </Container>
    </Nav>
  );
};

export default Navigation;

const Nav = styled(animated.nav)`
  position: fixed;
  z-index: 2;
  width: 100%;
  background-color: ${colors.blue};
  color: ${colors.white};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1rem;
  height: 100vh;
  box-shadow: inset 0 -0.5rem 1rem rgba(0, 0, 0, 0.2);
`;

const Container = styled(animated.ul)`
  grid-column: 1 / -1;
  display: flex;
  margin-right: 3rem;
  margin-top: 4rem;
  flex-direction: column;
  justify-content: start;
  text-align: right;
`;
