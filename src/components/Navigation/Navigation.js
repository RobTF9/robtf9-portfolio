import React from "react";
import styled from "styled-components";
import colors from "../../shared/colors";
import NavLink from "./NavLink";

const Navigation = ({ visible }) => (
  <NavWrapper visible={visible}>
    <ul>
      <NavLink text="Projects" />
      <NavLink text="Experience" />
      <NavLink text="About" />
      <NavLink text="Contact" />
    </ul>
  </NavWrapper>
);

export default Navigation;

const NavWrapper = styled.nav`
  position: fixed;
  transform: translateY(${({ visible }) => (!visible ? -15 : 0)}rem);
  z-index: 2;
  width: 100%;
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  min-height: 15rem;

  transition: transform 0.3s ease-in-out;

  ul {
    grid-column: 3 / 11;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
