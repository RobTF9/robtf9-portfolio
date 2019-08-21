import React from "react";
import styled from "styled-components";
import colors from "../../shared/colors";
import breakpoints from "../../shared/breakpoints";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <Container>
      <CopyrightBar>
        <p>© Robert Squires {new Date().getFullYear()}</p>
        <Icons>
          <a href="https://github.com/robtf9">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/robtf9/">
            <FaLinkedin />
          </a>
          <Link to="/contact">
            <FaEnvelope />
          </Link>
        </Icons>
      </CopyrightBar>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 4.2rem;
  z-index: -1;
  background-color: ${colors.blue};
  color: ${colors.white};
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
    grid-column: 1 / 9;
    padding: 0 3rem;

    ${breakpoints.tablet} {
      grid-column: 3 / 6;
      padding: 0;
    }
  }
`;

const Icons = styled.div`
  grid-column: 9 / 12;
  display: flex;
  justify-content: flex-end;

  a {
    margin-left: 2rem;
  }

  ${breakpoints.tablet} {
    grid-column: 9 / 11;
    padding: 0;
  }
`;
