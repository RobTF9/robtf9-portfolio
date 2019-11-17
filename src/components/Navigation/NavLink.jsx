import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import colors from "../../shared/colors";
import { transitions } from "../../shared/transitions";

const NavLink = ({ text, to, mouseOver }) => {
  const wrapperRef = useRef(null);
  return (
    <Wrapper ref={wrapperRef} onMouseOver={() => mouseOver(wrapperRef.current)}>
      <CustomLink to={to} activeClassName="active">
        {text}
      </CustomLink>
    </Wrapper>
  );
};

NavLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  mouseOver: PropTypes.func,
};

NavLink.defaultProps = {
  to: `/`,
};

export default NavLink;

const CustomLink = styled(Link)`
  position: relative;
  height: 100%;
  line-height: 7rem;
  color: ${colors.white};
  ${transitions.satanSnap}
`;

const Wrapper = styled.li`
  position: relative;
  margin-left: 5rem;
  display: flex;
  align-items: center;
  height: 7rem;

  .active {
    display: block;
    position: relative;
    pointer-events: none;
    color: ${colors.blue};
  }
`;
