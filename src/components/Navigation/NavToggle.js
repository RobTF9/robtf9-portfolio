import React from "react";
import { FaBars, FaArrowUp } from "react-icons/fa";
import styled from "styled-components";
import colors from "../../shared/colors";

const NavToggle = ({ toggle, visible }) => {
  return (
    <Button visible={visible} onClick={toggle}>
      {visible ? <FaArrowUp /> : <FaBars />}
    </Button>
  );
};

export default NavToggle;

const Button = styled.button`
  position: fixed;
  cursor: pointer;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 2.4rem;
  top: 0;
  left: 1rem;
  width: 5.6rem;
  height: 5.6rem;
  background-color: ${colors.blue};
  color: ${colors.white};
  transform: translateY(${({ visible }) => (visible ? 2.5 : 0)}rem);
  transition: transform 0.3s ease-in-out;
`;
