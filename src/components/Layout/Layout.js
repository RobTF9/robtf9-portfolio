import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import Navigation from "../Navigation/Navigation";
import colors from "../../shared/colors";
import "./styles/init.css";
import "./styles/type.css";
import NavToggle from "../Navigation/NavToggle";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggleNav = () => setVisible(!visible);

  return (
    <>
      <Body visible={visible} />
      <Navigation visible={visible} />
      <NavToggle visible={visible} toggle={toggleNav} />
      <Main visible={visible}>
        <Overlay visible={visible} />
        {children}
      </Main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const Body = createGlobalStyle`
  body {
    background-color: ${colors.black};
    overflow: ${({ visible }) => (visible ? `hidden` : `visible`)};
  }
`;

const Main = styled.main`
  position: relative;
  z-index: 0;
  margin-bottom: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1rem;
  color: ${colors.white};
  background-color: ${colors.black};
  transform: translateY(${({ visible }) => (visible ? 100 : 0)}vh);
  transition: all 0.6s ease-in-out;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
`;

const Overlay = styled.div`
  pointer-events: ${({ visible }) => (visible ? `all` : `none`)};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: ${({ visible }) => (visible ? 0.5 : 0)};
  transition: opacity 0.3s ease-in-out;
`;
