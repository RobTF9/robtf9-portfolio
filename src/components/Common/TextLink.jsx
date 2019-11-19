import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import colors from "../../shared/colors";
import breakpoints from "../../shared/breakpoints";
import { FaArrowRight } from "react-icons/fa";
import { transitions } from "../../shared/transitions";

const TextLink = ({ text, to }) => {
  return (
    <StyledLink to={to}>
      {text} <FaArrowRight />
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  position: relative;
  display: block;
  color: ${colors.white};
  margin-bottom: 2rem;
  transform: translate3d(0rem, 0, 0);
  ${transitions.satanSnap}

  svg {
    color: ${colors.blue};
    margin: 0 0 -0.3rem;
    font-size: 1.6rem;
    transform: translate3d(0.5rem, 0, 0);
    ${transitions.satanSnap}
  }

  ${breakpoints.tablet} {
    &:hover,
    &:focus {
      color: ${colors.blue};
      transform: translate3d(-0.5rem, 0, 0);
      ${transitions.satanSnap}

      svg {
        transform: translate3d(1.5rem, 0, 0);
        ${transitions.satanSnap}
      }
    }
  }
`;

TextLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
};

TextLink.defaultProps = {
  to: `/`,
};

export default TextLink;
