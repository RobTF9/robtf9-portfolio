import React from "react";
import styled from "styled-components";
import colors from "../../shared/colors";
import NavLink from "./NavLink";

const NavWrapper = styled.nav`
  position: fixed;
  z-index: -1;
  width: 100%;
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  min-height: 15rem;
  box-shadow: inset 0 -1rem 1rem rgba(0, 0, 0, 0.15);

  ul {
    grid-column: 3 / 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Navigation = () => (
  <NavWrapper>
    <ul>
      <NavLink text="Projects" />
      <NavLink text="Experience" />
      <NavLink text="About" />
      <NavLink text="Contact" />
    </ul>
  </NavWrapper>
);

export default Navigation;
