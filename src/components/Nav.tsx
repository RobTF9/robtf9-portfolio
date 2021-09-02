import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavWrapper>
      <h1>Rob Squires</h1>
      <div>
        <a href="https://github.com/RobTF9">Github</a>
        <a href="https://www.linkedin.com/in/robtf9/">LinkedIn</a>
        <a href="/rob-squires-cv.pdf">CV</a>
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
