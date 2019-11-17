import React from "react";
import { ContentContainer } from "../../Common/Container";
import styled from "styled-components";
import breakpoints from "../../../shared/breakpoints";
import { animations } from "../../../shared/transitions";

const ProjectIntro = ({ copy }) => {
  return (
    <IntroContainer style={animations.horizontalSlide(`-15rem`, 100)}>
      <Copy className="full">{copy}</Copy>
    </IntroContainer>
  );
};

const IntroContainer = styled(ContentContainer)`
  margin-top: 6rem;

  ${breakpoints.desktop} {
    padding: 0rem calc(100vw / 12);
    margin-top: 12rem;
  }
`;

const Copy = styled.h3`
  line-height: 1.4;
  font-weight: 300;
`;

export default ProjectIntro;
