import React from "react";
import styled from "styled-components";
import colors from "../../shared/colors";
import { Link } from "gatsby";

const Button = ({ link, color, slug, click, copy }) => {
  return link ? (
    <Link to={slug}>
      <ButtonStyle color={color}>{copy}</ButtonStyle>
    </Link>
  ) : (
    <ButtonStyle onClick={click} color={color}>
      {copy}
    </ButtonStyle>
  );
};

export default Button;

export const ButtonStyle = styled.button`
  cursor: pointer;
  color: ${colors.white};
  padding: 1.5rem 5rem;
  font-weight: 600;
  border-radius: 3rem;
  width: 100%;
  background-color: ${colors.blue};
`;
