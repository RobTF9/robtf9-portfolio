import React from "react";
import styled from "styled-components";
import breakpoints from "../../../shared/breakpoints";
import colors from "../../../shared/colors";

const Content = styled.div`
  position: relative;
  margin-bottom: calc(100vh / 6);
  grid-column: 3 / 11;

  iframe {
    width: 100%;
  }

  ${breakpoints.desktop} {
    margin-bottom: calc(100vh / 3);
  }
`;

export const LeftContent = styled(Content)`
  ${breakpoints.desktop} {
    grid-column: 1 / 10;
  }
`;

export const RightContent = styled(Content)`
  ${breakpoints.desktop} {
    grid-column: 4 / -1;
  }
`;

export const MiddleContent = styled(Content)`
  ${breakpoints.desktop} {
    grid-column: 3 / 11;
  }
`;

export const Text = styled.div`
  position: relative;
  padding: 3rem;
  background-color: ${colors.black};
  box-shadow: 0 0 5rem rgba(0, 0, 0, 0.25);
  width: calc(100% - 6rem);

  h3 {
    margin-bottom: 1rem;
  }

  ${breakpoints.desktop} {
    position: absolute;
    padding: 5rem;
    max-width: 25%;
    bottom: calc(-100vh / 12);
    ${({ layout }) => {
      if (layout === "Left") {
        return `right: calc(-100vh / 12);`;
      }
      if (layout === "right") {
        return `left: calc(-100vh / 12);`;
      }
      if (layout === "middle") {
        return;
      }
    }}
  }
`;

export const Video = ({ video, client }) => (
  <Wrapper>
    <iframe
      title={client}
      aria-hidden="true"
      src={`https://www.youtube.com/embed/${video}?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=${video}`}
      frameborder="0"
      allowfullscreen=""
    ></iframe>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
