import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import Navigation from "../Navigation/Navigation";
import colors from "../../shared/colors";
import "./styles/init.css";
import "./styles/type.css";
import NavToggle from "../Navigation/NavToggle";
import Footer from "../Footer/Footer";
import { useSpring, animated, config } from "react-spring";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const toggleNav = () => setVisible(!visible);

  const animation = useSpring({
    positive: visible ? 100 : 0,
    negative: visible ? 0 : 100,
    config: config.slow,
  });

  return (
    <>
      <Body visible={visible} />
      <Navigation visible={visible} animation={animation} toggle={toggleNav} />
      <NavToggle visible={visible} toggle={toggleNav} />
      <Main
        style={{
          transform: animation.positive.interpolate(
            y => `translate3d(0, ${y}vh, 0)`
          ),
        }}
      >
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

const Main = styled(animated.main)`
  .tl-edges {
    overflow-x: visible;

    .tl-wrapper {
      position: relative;
      z-index: 0;
      margin-bottom: 4.2rem;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-column-gap: 1rem;
      color: ${colors.white};
      background-color: ${colors.black};
      min-height: 100vh;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    }
  }
`;
