import React from "react";
import PropTypes from "prop-types";
import navArray from "../../shared/navigationArray";
import styled from "styled-components";
import colors from "../../shared/colors";
import { Link } from "gatsby";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import breakpoints from "../../shared/breakpoints";

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
        <DrawerLink onClick={toggleNav}>
          <a href="https://github.com/robtf9" target="_blank">
            <FaGithub />
          </a>
        </DrawerLink>
        <DrawerLink onClick={toggleNav}>
          <a href="https://www.linkedin.com/in/robtf9/" target="_blank">
            <FaLinkedinIn />
          </a>
        </DrawerLink>
      </DrawerList>
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
  position: absolute;
  top: 0;
  right: 3.5rem;
  text-align: right;
  height: calc(100% - 21rem);
  padding: 14rem 0 7rem;
`;

const DrawerLink = styled.li`
  color: ${colors.white};
  padding-bottom: 3.5rem;

  .active {
    color: ${colors.black};
    opacity: 0.5;
  }
`;

export default NavDrawer;
