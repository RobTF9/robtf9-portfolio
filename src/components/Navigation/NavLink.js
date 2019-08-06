import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import colors from "../../shared/colors";

const NavLink = ({ text, to, toggle }) => {
  return (
    <Wrapper>
      <Link onClick={toggle} to={to} activeClassName="active">
        <h4>{text}</h4>
        <span></span>
      </Link>
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

const Wrapper = styled.li`
  padding: 2rem 0;

  .active {
    position: relative;

    span {
      position: absolute;
      width: 0.8rem;
      height: 1.6rem;
      top: -2rem;
      right: -3rem;
      background-color: ${colors.black};
      opacity: 0.5;
    }
  }
`;
