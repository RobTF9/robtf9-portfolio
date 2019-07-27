import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import colors from "../shared/colors";
import logo from "../images/gatsby-icon.png";

const HeaderWrapper = styled.header`
  background-color: ${colors.black};
  margin-bottom: 1.45rem;

  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }

  h1 {
    margin: 0;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt="Logo" style={{ maxWidth: 80 }} />
          {siteTitle}
        </Link>
      </h1>
    </div>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
