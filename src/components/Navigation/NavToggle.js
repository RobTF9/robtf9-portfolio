import React from "react";
import { FaBars, FaArrowUp } from "react-icons/fa";
import styled from "styled-components";
import colors from "../../shared/colors";
import { useSpring, animated, config } from "react-spring";

const NavToggle = ({ toggle, visible }) => {
  const animation = useSpring({
    transform: `translateY(${visible ? 60 : 0}vh)`,
    config: config.slow,
  });

  return (
    <Button style={animation} onClick={toggle}>
      {visible ? <FaArrowUp /> : <FaBars />}
    </Button>
  );
};

export default NavToggle;

const Button = styled(animated.button)`
  position: fixed;
  cursor: pointer;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 2.4rem;
  top: 1rem;
  right: 1rem;
  width: 4.4rem;
  height: 4.4rem;
  color: ${colors.white};
`;
