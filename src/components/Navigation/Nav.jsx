import React, { useState, useRef } from "react";
import styled from "styled-components";
import colors from "../../shared/colors";
import breakpoints from "../../shared/breakpoints";
import NavLink from "./NavLink";
import logo from "../../images/favicon.jpg";
import { Link } from "gatsby";
import { animated } from "react-spring";
import { transitions } from "../../shared/transitions";

const Nav = () => {
  // Using an array to build the navigation
  // so I can programmatically add refs
  // to make the bar slide between items.

  const navArray = [
    { text: "Projects", to: "/projects" },
    { text: "About", to: "/about" },
    { text: "Contact", to: "/contact" },
    { text: "Experience", to: "/experience" },
  ];

  const [position, setPosition] = useState({
    width: 0,
    left: 0,
  });

  const [active, setActive] = useState(0);

  const mouseOver = target => {
    const barRect = target.getBoundingClientRect();
    setPosition({
      width: barRect.width,
      left: barRect.left + window.scrollX - (window.innerWidth - barRect.width),
    });
  };

  const mouseEnterList = () => {
    setActive(1);
  };

  const mouseLeaveList = () => {
    setActive(0);
  };

  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="Robert Squires - Logo" />
      </Link>
      <LinkList onMouseOver={mouseEnterList} onMouseOut={mouseLeaveList}>
        {navArray.map((item, key) => (
          <NavLink
            mouseOver={mouseOver}
            key={key}
            text={item.text}
            to={item.to}
          />
        ))}
      </LinkList>
      <Bar position={position} active={active} />
    </Container>
  );
};

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
  width: 5rem;
`;

const LinkList = styled.ul`
  position: absolute;
  display: flex;
  right: 5rem;
  height: 5rem;
`;

const Bar = styled.span`
  position: absolute;
  background-color: ${colors.blue};
  top: 4.7rem;
  right: 0;
  height: 0.3rem;
  ${transitions.satanSnap};

  opacity: ${({ active }) => active};
  width: ${({ position }) => position.width}px;
  transform: translateX(
    ${({ position, active }) => (active > 0 ? position.left : 0)}px
  );
`;

export default Nav;
