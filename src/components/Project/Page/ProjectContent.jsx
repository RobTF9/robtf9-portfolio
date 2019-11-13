import React from "react";
import styled from "styled-components";
import breakpoints from "../../../shared/breakpoints";
import Img from "gatsby-image";
import {
  LeftContent,
  RightContent,
  MiddleContent,
  Text,
} from "./ContentBlocks";

const ProjectContent = ({ color, client, content }) => {
  return (
    <ProjectContentContainer color={color} client={client}>
      {content.map(({ image, title, copy, layout, video }) => {
        if (layout === "Left") {
          return (
            <LeftContent>
              {image ? <Img fluid={image.childImageSharp.fluid} /> : null}
              {video ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video}?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=${video}`}
                  frameborder="0"
                  allowfullscreen=""
                ></iframe>
              ) : null}
              {title ? (
                <Text layout={layout} color={color}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </Text>
              ) : null}
            </LeftContent>
          );
        }

        if (layout === "Right") {
          return (
            <RightContent>
              {image ? <Img fluid={image.childImageSharp.fluid} /> : null}
              {video ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video}?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=${video}`}
                  frameborder="0"
                  allowfullscreen=""
                ></iframe>
              ) : null}
              {title ? (
                <Text layout={layout} color={color}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </Text>
              ) : null}
            </RightContent>
          );
        }
        if (layout === "Middle") {
          return (
            <MiddleContent>
              {image ? <Img fluid={image.childImageSharp.fluid} /> : null}
              {video ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video}?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=${video}`}
                  frameborder="0"
                  allowfullscreen=""
                ></iframe>
              ) : null}
              {title ? (
                <Text layout={layout} color={color}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </Text>
              ) : null}
            </MiddleContent>
          );
        } else {
          return;
        }
      })}
    </ProjectContentContainer>
  );
};

const ProjectContentContainer = styled.div`
  position: relative;
  grid-column: 1 / -1;
  display: grid;
  grid-row-gap: 8rem;
  margin-bottom: 16rem;
  grid-template-columns: repeat(12, 1fr);
  margin-top: 6rem;

  ${breakpoints.tablet} {
    grid-column: 1 / -1;
  }
`;

export default ProjectContent;
