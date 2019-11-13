import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import {
  LeftContent,
  RightContent,
  MiddleContent,
  Text,
  Video,
} from "./ContentBlocks";

const ProjectContent = ({ color, client, content }) => {
  return (
    <ProjectContentContainer color={color} client={client}>
      {content.map(({ image, title, copy, layout, video }) => {
        if (layout === "Left") {
          return (
            <LeftContent>
              {image ? <Img fluid={image.childImageSharp.fluid} /> : null}
              {video ? <Video video={video} /> : null}
              {title ? (
                <Text client={client} layout={layout} color={color}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </Text>
              ) : null}
            </LeftContent>
          );
        } else if (layout === "right") {
          return (
            <RightContent>
              {image ? <Img fluid={image.childImageSharp.fluid} /> : null}
              {video ? <Video video={video} /> : null}
              {title ? (
                <Text client={client} layout={layout} color={color}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </Text>
              ) : null}
            </RightContent>
          );
        } else if (layout === "middle") {
          return (
            <MiddleContent>
              {image ? <Img fluid={image.childImageSharp.fluid} /> : null}
              {video ? <Video video={video} /> : null}
              {title ? (
                <Text client={client} layout={layout} color={color}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </Text>
              ) : null}
            </MiddleContent>
          );
        } else {
          return null;
        }
      })}
    </ProjectContentContainer>
  );
};

const ProjectContentContainer = styled.div`
  position: relative;
  grid-column: 1 / -1;
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  margin-top: 6rem;
`;

export default ProjectContent;
