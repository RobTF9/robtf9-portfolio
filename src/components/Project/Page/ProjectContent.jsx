import React, { useEffect } from "react";
import { ContentContainer } from "../../Common/Container";
import styled from "styled-components";
import breakpoints from "../../../shared/breakpoints";
import colors from "../../../shared/colors";

const ProjectContent = ({ content, color, client }) => {
  useEffect(() => {
    console.log(document.getElementsByClassName("full"));
  }, []);

  return (
    <ProjectContentContainer
      color={color}
      client={client}
      dangerouslySetInnerHTML={{ __html: content }}
    ></ProjectContentContainer>
  );
};

const ProjectContentContainer = styled(ContentContainer)`
  margin-top: 6rem;

  .ImageWithCaption {
    .Caption {
      position: relative;
      padding: 2rem;
      background-color: ${({ color }) => color};
      color: ${({ client }) =>
        client === "MyEthvault" ? `#02394A` : colors.white};
      margin-top: 2rem;
    }
  }

  .full {
    margin-bottom: 6rem;

    ${breakpoints.desktop} {
      margin-bottom: 12rem;
    }
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
