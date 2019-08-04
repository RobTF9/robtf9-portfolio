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
  top: 1rem;
  right: 1rem;
  width: 4.4rem;
  height: 4.4rem;
  color: ${colors.white};
  transform: translateY(${({ visible }) => (visible ? 90 : 0)}vh);
  transition: transform 0.6s ease-in-out;
`;
