import React from "react";
import styled from "styled-components";
import colors from "../../shared/colors";
import breakpoints from "../../shared/breakpoints";
import NavLink from "./NavLink";
import logo from "../../images/logo.svg";
import { useSpring, animated, config } from "react-spring";

const Navigation = ({ animation, visible, toggle }) => {
  const subAnimation = useSpring({
    transform: `translate3d(0, ${visible ? 0 : -50}vh, 0)`,
    opacity: visible ? 1 : 0,
    config: config.slow,
  });

  return (
    <Nav
      style={{
        transform: animation.negative.interpolate(
          y => `translate3d(0, ${-y}vh, 0)`
        ),
      }}
    >
      <Container style={subAnimation}>
        <NavLink toggle={toggle} text="Home" to="/" />
        <NavLink toggle={toggle} text="Experience" to="/experience" />
        <NavLink toggle={toggle} text="About" to="/about" />
        <NavLink toggle={toggle} text="Contact" to="/contact" />
      </Container>
      <Logo src={logo} alt="Robert Squires - Logo" />
    </Nav>
  );
};

export default Navigation;

const Nav = styled(animated.nav)`
  position: fixed;
  z-index: 2;
  width: 100%;
  overflow: hidden;
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
  margin-bottom: 9rem;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;

  ${breakpoints.desktop} {
    margin-bottom: 3rem;
  }
`;

const Logo = styled.img`
  position: absolute;
  opacity: 0;
  left: 0;
  bottom: -1rem;
  width: 33%;

  ${breakpoints.tablet} {
    opacity: 0.25;
  }
`;
