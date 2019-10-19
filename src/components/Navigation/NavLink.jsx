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
  navBarPosition: PropTypes.func,
};

NavLink.defaultProps = {
  to: `/`,
};

export default NavLink;

const CustomLink = styled(Link)`
  position: relative;
  color: ${colors.blue};
  ${transitions.satanSnap}
`;

const Wrapper = styled.li`
  position: relative;
  margin-left: 5rem;
  display: flex;
  align-items: center;
  height: 5rem;

  .active {
    display: block;
    position: relative;
    pointer-events: none;
    color: ${colors.white};
  }
`;
