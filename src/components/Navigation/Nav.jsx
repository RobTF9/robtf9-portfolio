import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../shared/colors";
import NavLink from "./NavLink";
import logo from "../../images/favicon.jpg";
import { Link } from "gatsby";
import { transitions } from "../../shared/transitions";

const Nav = () => {
  // Using an array to build the navigation.
  const navArray = [
    { text: "Projects", to: "/projects" },
    { text: "About", to: "/about" },
    { text: "Contact", to: "/contact" },
    { text: "Experience", to: "/experience" },
  ];

  // This state handles the position of the sliding bar.
  const [position, setPosition] = useState({
    width: 0,
    left: 0,
  });

  // This state handles the opacity of the sliding bar.
  // Also use this to reset the position of bar when mouse leaves list.
  const [active, setActive] = useState(0);

  // Map the sliding bar to the element the mouse is over.
  const mouseOver = target => {
    const barRect = target.getBoundingClientRect();
    setPosition({
      width: barRect.width,
      left: barRect.left + window.scrollX - (window.innerWidth - barRect.width),
    });
  };

  // Make bar visible when mouse enters link list.
  const mouseEnterList = () => {
    setActive(1);
  };

  // Make bar invisible when mouse leaves list.
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
  left: calc(100vw / 12);
  top: 0;
  width: 7rem;
`;

const LinkList = styled.ul`
  position: absolute;
  display: flex;
  right: calc(100vw / 12);
  height: 7rem;
`;

const Bar = styled.span`
  position: absolute;
  background-color: ${colors.blue};
  top: 6.8rem;
  right: 0;
  height: 0.2rem;
  ${transitions.satanSnap};
  opacity: ${({ active }) => active};
  width: ${({ position }) => position.width}px;

  /* Pass in active to reset position if mouse has left list area.*/
  transform: translateX(
    ${({ position, active }) => (active > 0 ? position.left : 0)}px
  );
`;

export default Nav;
