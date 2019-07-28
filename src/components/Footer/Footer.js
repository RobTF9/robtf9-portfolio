import React from "react";
import styled from "styled-components";
import colors from "../../shared/colors";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <UsefulLinks>
          <h3>Useful links</h3>
          <li>Projects</li>
          <li>Experience</li>
          <li>About</li>
          <li>Contact</li>
        </UsefulLinks>
      </Wrapper>
      <CopyrightBar>
        <p>© Robert Squires {new Date().getFullYear()}</p>
      </CopyrightBar>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 60rem;
  z-index: -1;
  background-color: ${colors.blue};
  color: ${colors.white};
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1rem;
  padding: 0 1rem;
`;

const UsefulLinks = styled.ul`
  padding-top: 10rem;
  grid-column: 3 / 7;

  * {
    margin-bottom: 2rem;
  }
`;

const CopyrightBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1rem;
  padding: 1rem 0;
  background-color: rgba(0, 0, 0, 0.5);

  p {
    grid-column: 3 / 11;
    padding: 0 1rem;
  }
`;
