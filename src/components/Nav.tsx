import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavWrapper>
      <h1>Rob Squires</h1>
      <div>
        <a href="">Github</a>
        <a href="">LinkedIn</a>
        <a href="">CV</a>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  width: 100%;
  margin: 30px 0 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div a {
    margin-left: 30px;
  }
`;

export default Nav;
