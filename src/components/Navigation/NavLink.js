import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import colors from "../../shared/colors";
import { FaArrowRight } from "react-icons/fa";
import transitions from "../../shared/transitions";

const NavLink = ({ text, to, toggle }) => {
  return (
    <Wrapper>
      <CustomLink onClick={toggle} to={to} activeClassName="active">
        <h3>
          {text} <FaArrowRight />
        </h3>
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

const Wrapper = styled.li`
  padding: 1rem 0;

  .active {
    position: relative;
    color: ${colors.black};

    h3 {
      opacity: 0.25;

      svg {
        opacity: 1 !important;
      }
    }
  }
`;

const CustomLink = styled(Link)`
  position: relative;
  color: ${colors.white};

  h3 {
    transform: translate3d(2rem, 0, 0);
    ${transitions.quickSnap}

    svg {
      color: ${colors.black};
      margin-top: 0.5rem;
      font-size: 2.4rem;
      opacity: 0;
      transform: translate3d(5rem, 0, 0);
      ${transitions.quickSnap}
    }
  }

  &:hover {
    h3 {
      transform: translate3d(-3rem, 0, 0);
      ${transitions.quickSnap}

      svg {
        opacity: 0.25;
        transform: translate3d(-0rem, 0, 0);
        ${transitions.quickSnap}
      }
    }
  }
`;
