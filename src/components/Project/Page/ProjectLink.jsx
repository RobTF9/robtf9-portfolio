import React from "react";
import styled from "styled-components";
import { ContentContainer } from "../../Common/Container";
import { Link } from "gatsby";
import colors from "../../../shared/colors";
import { transitions } from "../../../shared/transitions";

const ProjectLink = ({ color, image }) => {
  return (
    <LinkContainer color={color}>
      <h2>Want to know more?</h2>
      <span>
        <Button to="/">View the project</Button>
        <ContactButton to="/contact">Get in touch</ContactButton>
      </span>
    </LinkContainer>
  );
};

const LinkContainer = styled(ContentContainer)`
  position: relative;
  margin-top: 6rem;
  margin-bottom: 24rem;
  background-color: ${({ color }) => color};
  padding: 6rem;

  h2 {
    position: absolute;
    top: -3.25rem;
    left: 1rem;
  }

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

const Button = styled(Link)`
  position: relative;
  z-index: 1;
  font-weight: 400;
  padding: 1.5rem 4rem;
  margin-right: 2rem;
  text-align: right;
  color: ${colors.white};
  background-color: ${colors.black};
  transform: translateY(6rem);
  ${transitions.mediumSnap};

  ${LinkContainer}:hover & {
    transform: translateY(0rem);
  }
`;

const ContactButton = styled(Button)`
  ${transitions.satanSnap};
`;

export default ProjectLink;
