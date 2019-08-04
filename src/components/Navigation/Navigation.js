import React from "react";
import styled from "styled-components";
import colors from "../../shared/colors";
import NavLink from "./NavLink";

const Navigation = ({ visible }) => (
  <Nav visible={visible}>
    <Container>
      <NavLink text="Home" to="/" />
      <NavLink text="Projects" to="/projects" />
      <NavLink text="Experience" to="/experience" />
      <NavLink text="About" to="/about" />
      <NavLink text="Contact" to="/contact" />
    </Container>
  </Nav>
);

export default Navigation;

const Nav = styled.nav`
  position: fixed;
  transform: translateY(${({ visible }) => (!visible ? -100 : 0)}vh);
  z-index: 2;
  width: 100%;
  background-color: ${colors.blue};
  color: ${colors.white};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1rem;
  height: 100vh;
  transition: transform 0.6s ease-in-out;
  box-shadow: inset 0 -0.5rem 1rem rgba(0, 0, 0, 0.2);
`;

const Container = styled.ul`
  grid-column: 1 / -1;
  display: flex;
  margin-right: 3rem;
  flex-direction: column;
  justify-content: start;
  text-align: right;

  li {
    padding: 4rem 0;
  }
`;
