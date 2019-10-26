import React from "react";
import { ContentContainer } from "../../Common/Container";
import styled from "styled-components";
import breakpoints from "../../../shared/breakpoints";
import colors from "../../../shared/colors";

const ProjectContent = ({ content, color }) => {
  return (
    <ProjectContentContainer
      color={color}
      dangerouslySetInnerHTML={{ __html: content }}
    ></ProjectContentContainer>
  );
};

const ProjectContentContainer = styled(ContentContainer)`
  margin-top: 6rem;

  .ImageWithCaption {
    position: relative;
    margin-bottom: 12rem;

    .Caption {
      position: absolute;
      left: 2rem;
      bottom: 0;
      max-width: calc(50% - 8rem);
      padding: 2rem;
      background-color: ${colors.black};
    }
  }

  .full {
    margin-bottom: 12rem;
  }

  .gatsby-resp-image-background-image {
    background-image: none !important;
    box-shadow: none !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
  }
`;

export default ProjectContent;
