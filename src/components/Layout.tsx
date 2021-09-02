import React from "react";
import styled from "styled-components";
import "@fontsource/libre-baskerville";
import Typograhy from "@/styles/Typography";
import Color from "@/styles/Color";

const Layout = ({ children }) => {
  return (
    <>
      <Typograhy />
      <Color />
      <Main>{children}</Main>
    </>
  );
};

const Main = styled.main`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default Layout;
