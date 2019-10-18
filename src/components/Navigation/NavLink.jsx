import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import colors from "../../shared/colors";
import breakpoints from "../../shared/breakpoints";
import { FaArrowRight } from "react-icons/fa";
import transitions from "../../shared/transitions";

const NavLink = ({ text, to }) => {
  return (
    <Wrapper>
      <CustomLink to={to} activeClassName="active">
        {text}
      </CustomLink>
      <span />
    </Wrapper>
  );
};

NavLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
};

NavLink.defaultProps = {
  to: `/`,
};

export default NavLink;

const CustomLink = styled(Link)`
  position: relative;
  color: ${colors.white};
  opacity: 0.6;
`;

const Wrapper = styled.li`
  position: relative;
  margin-left: 5rem;
  display: flex;
  align-items: center;
  height: 7rem;

  span {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${colors.blue};
    width: 100%;
    height: 0rem;
  }
  .active {
    display: block;
    position: relative;
    pointer-events: none;
    opacity: 1;
  }

  .active + span {
    height: 0.3rem;
  }
`;
