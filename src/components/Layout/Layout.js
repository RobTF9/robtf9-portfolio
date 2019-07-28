import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Navigation from "../Navigation/Navigation";
import colors from "../../shared/colors";
import "./styles/init.css";
import "./styles/type.css";

const MainWrapper = styled.main`
  position: relative;
  z-index: 0;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1rem;
  background-color: ${colors.black};
  color: ${colors.white};
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Navigation siteTitle={data.site.siteMetadata.title} />
      <MainWrapper>{children}</MainWrapper>
      <footer>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
