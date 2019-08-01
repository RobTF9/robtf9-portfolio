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
  transform: translateY(${({ visible }) => (!visible ? -10 : 0)}rem);
  z-index: 2;
  width: 100%;
  background-color: ${colors.blue};
  color: ${colors.white};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1rem;
  min-height: 10rem;
  transition: transform 0.3s ease-in-out;
  box-shadow: inset 0 -0.5rem 1rem rgba(0, 0, 0, 0.2);
`;

const Container = styled.ul`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
