import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import colors from "../../shared/colors";

const NavToggle = ({ toggle, visible }) => {
  return (
    <Button onClick={toggle} aria-label="Navigation toggle">
      {visible ? <FaTimes /> : <FaBars />}
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
  top: 3rem;
  right: 3rem;
  color: ${colors.white};
`;
