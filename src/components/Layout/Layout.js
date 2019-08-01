import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
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

const Main = styled.main`
  position: relative;
  z-index: 0;
  margin-bottom: 60rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1rem;
  background-color: ${colors.black};
  color: ${colors.white};
  transform: translateY(${({ visible }) => (visible ? 10 : 0)}rem);
  transition: all 0.3s ease-in-out;
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
