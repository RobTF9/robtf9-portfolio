import React from "react";
import navArray from "../../shared/navigationArray";
import styled from "styled-components";
import colors from "../../shared/colors";
import { Link } from "gatsby";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import breakpoints from "../../shared/breakpoints";
import logo from "../../images/logo.svg";

const NavDrawer = ({ toggleNav }) => {
  return (
    <Drawer>
      <DrawerList>
        <DrawerLink onClick={toggleNav}>
          <Link activeClassName="active" to="/">
            Home
          </Link>
        </DrawerLink>
        {navArray.map((item, key) => (
          <DrawerLink key={key} onClick={toggleNav}>
            <Link activeClassName="active" to={item.to}>
              {item.text}
            </Link>
          </DrawerLink>
        ))}
      </DrawerList>
      <IconList>
        <DrawerLink onClick={toggleNav}>
          <a
            href="https://github.com/robtf9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </DrawerLink>
        <DrawerLink onClick={toggleNav}>
          <a
            href="https://www.linkedin.com/in/robtf9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </DrawerLink>
      </IconList>
      <Logo src={logo} alt="Robert Squires - Logo" />
    </Drawer>
  );
};

const Drawer = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.blue};

  ${breakpoints.desktop} {
    display: none;
  }
`;

const DrawerList = styled.ul`
  position: relative;
  width: calc(100vw - ((100vw / 12) * 2));
  text-align: right;
  padding: 7rem calc(100vw / 12) 0rem;
`;

const IconList = styled.ul`
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  width: calc(100vw - ((100vw / 12) * 2));
  text-align: right;
  height: calc(100% - 21rem);
  padding: 3.5rem calc(100vw / 12) 7rem;
`;

const DrawerLink = styled.li`
  color: ${colors.white};
  padding-bottom: 3.5rem;

  .active {
    color: ${colors.black};
    opacity: 0.5;
  }
`;

const Logo = styled.img`
  position: fixed;
  z-index: 5;
  opacity: 0.25;
  left: 0;
  bottom: -1rem;
  width: 50%;
`;

export default NavDrawer;
