import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const NavLink = ({ text, to }) => {
  return (
    <li>
      <Link to={to}>
        <h3>{text}</h3>
      </Link>
    </li>
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
