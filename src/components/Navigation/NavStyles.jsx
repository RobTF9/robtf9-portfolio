import styled from "styled-components";
import colors from "../../shared/colors";
import { transitions } from "../../shared/transitions";
import breakpoints from "../../shared/breakpoints";
import { animated } from "react-spring";

export const Container = styled.nav`
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 5rem;
  background: rgba(34, 34, 34, 0.8);
  ${breakpoints.desktop} {
    height: 7rem;
  }
`;

export const Logo = styled(animated.img)`
  position: absolute;
  left: calc(100vw / 12);
  top: 0;
  width: 5rem;

  ${breakpoints.desktop} {
    width: 7rem;
  }
`;

export const LinkList = styled.ul`
  position: absolute;
  display: none;
  right: calc(100vw / 12);
  height: 7rem;

  /* Backface visibility stops the bug making LinkList flicker */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  ${breakpoints.desktop} {
    display: flex;
  }
`;

export const Bar = styled.span`
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

export const MenuButton = styled.button`
  position: absolute;
  cursor: pointer;
  display: flex;
  right: calc(100vw / 12);
  height: 5rem;

  /* Backface visibility stops the bug making LinkList flicker */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  svg {
    fill: ${colors.white};
  }

  ${breakpoints.desktop} {
    display: none;
  }
`;
