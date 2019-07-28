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
      <Main visible={visible}>{children}</Main>
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
  width: 100vw;
  z-index: 0;
  padding: 0 1rem;
  margin-bottom: 60rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1rem;
  background-color: ${colors.black};
  color: ${colors.white};
  transform: translateY(${({ visible }) => (visible ? 15 : 0)}rem);
  transition: transform 0.3s ease-in-out;

  * {
    opacity: ${({ visible }) => (visible ? 0.5 : 1)};
    transition: opacity 0.3s ease-in-out;
  }
`;
