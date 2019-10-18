import React from "react";
import styled from "styled-components";
import colors from "../../shared/colors";
import breakpoints from "../../shared/breakpoints";
import NavLink from "./NavLink";
import logo from "../../images/favicon.jpg";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="Robert Squires - Logo" />
      </Link>
      <LinkList>
        <NavLink text="Projects" to="/projects" />
        <NavLink text="About" to="/about" />
        <NavLink text="Contact" to="/contact" />
        <NavLink text="Experience" to="/experience" />
      </LinkList>
    </Container>
  );
};

export default Nav;

const Container = styled.nav`
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
`;

const Logo = styled.img`
  position: absolute;
  left: 5rem;
  top: 0;
  width: 7rem;
`;

const LinkList = styled.ul`
  position: absolute;
  display: flex;
  right: 5rem;
  height: 7rem;
`;
