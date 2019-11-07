import React from "react";
import styled from "styled-components";
import { ContentContainer } from "../../Common/Container";
import colors from "../../../shared/colors";
import Img from "gatsby-image";
import breakpoints from "../../../shared/breakpoints";

const ProjectLink = ({ color, image, link }) => {
  return (
    <LinkContainer color={color}>
      <h2>Want to know more?</h2>
      <ExternalButton target="_blank" href={link}>
        View the project
      </ExternalButton>
    </LinkContainer>
  );
};

const LinkContainer = styled(ContentContainer)`
  position: relative;
  margin-top: 6rem;
  margin-bottom: 12rem;
  background-color: ${({ color }) => color};
  padding: 6rem;

  h2 {
    position: absolute;
    top: -2.25rem;
    left: 1rem;

    ${breakpoints.tablet} {
      top: -2.75rem;
    }

    ${breakpoints.desktop} {
      top: -3.25rem;
    }
  }
`;

const Image = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ExternalButton = styled.a`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  z-index: 1;
  font-weight: 400;
  padding: 1.5rem 4rem;
  text-align: center;
  color: ${colors.white};
  background-color: ${colors.black};
`;

export default ProjectLink;
