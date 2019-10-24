import React from "react";
import { ContentContainer } from "../../Common/Container";
import styled from "styled-components";
import breakpoints from "../../../shared/breakpoints";

const ProjectIntro = ({ copy }) => {
  return (
    <IntroContainer>
      <Copy className="full">{copy}</Copy>
    </IntroContainer>
  );
};

const IntroContainer = styled(ContentContainer)`
  margin-top: 12em;

  ${breakpoints.desktop} {
    padding: 0rem calc(100vw / 12);
  }
`;

const Copy = styled.h3`
  line-height: 1.4;
  font-weight: 300;
`;

export default ProjectIntro;
