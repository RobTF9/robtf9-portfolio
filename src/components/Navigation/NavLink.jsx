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
`;

const Wrapper = styled.li`
  position: relative;
  margin-left: 5rem;
  display: inline;

  .active {
    display: block;
    position: relative;
    color: ${colors.blue};
    pointer-events: none;
  }
`;
