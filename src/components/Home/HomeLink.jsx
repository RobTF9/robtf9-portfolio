import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import colors from "../../shared/colors";
import breakpoints from "../../shared/breakpoints";
import { FaArrowRight } from "react-icons/fa";
import { transitions } from "../../shared/transitions";

const HomeLink = ({ text, to }) => {
  return (
    <StyledLink to={to} activeClassName="active">
      {text} <FaArrowRight />
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  position: relative;
  display: block;
  color: ${colors.white};
  margin-bottom: 2rem;

  svg {
    color: ${colors.blue};
    margin: 0 0 -0.3rem;
    font-size: 1.6rem;
    transform: translate3d(1rem, 0, 0);
    ${transitions.quickSnap}
  }

  ${breakpoints.tablet} {
    &:hover {
      svg {
        transform: translate3d(2rem, 0, 0);
        ${transitions.quickSnap}
      }
    }
  }
`;

HomeLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
};

HomeLink.defaultProps = {
  to: `/`,
};

export default HomeLink;
