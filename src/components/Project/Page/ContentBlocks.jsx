import React, { useState, useEffect } from "react";
import Img from "gatsby-image";
import {
  LeftContent,
  RightContent,
  MiddleContent,
  Text,
  Video,
} from "./ContentBlockStyles";
import { animated, useSpring, config } from "react-spring";
import { Waypoint } from "react-waypoint";

// Different alignment blocks

export const LeftContentBlock = props => (
  <LeftContent>
    <Content {...props} y="0" x="-30rem" />
  </LeftContent>
);

export const RightContentBlock = props => (
  <RightContent>
    <Content {...props} y="0" x="30rem" />
  </RightContent>
);

export const MiddleContentBlock = props => (
  <MiddleContent>
    <Content {...props} y="30rem" x="0" />
  </MiddleContent>
);

// Below here is where all the content get's generated dependent on what gets passed in through props.

const AnimatedImage = animated(Img);
const AnimatedText = animated(Text);

const Content = props => {
  const [view, setView] = useState(false);
  const [textView, setTextView] = useState(false);

  useEffect(() => {
    setView(false);
    return () => {
      setView(false);
    };
  }, []);

  return (
    <>
      <Waypoint onEnter={() => setView(true)} />
      {props.image ? (
        <AnimatedImage
          style={useSpring({
            opacity: view ? 1 : 0,
            transform: view
              ? `translate3d(0, 0rem, 0)`
              : `translate3d(${props.x}, ${props.y}, 0)`,
            config: config.slow,
          })}
          fluid={props.image.childImageSharp.fluid}
        />
      ) : null}
      {props.video ? (
        <Video
          style={useSpring({
            opacity: view ? 1 : 0,
            transform: view
              ? `translate3d(0, 0rem, 0)`
              : `translate3d(${props.x}, ${props.y}, 0)`,
            config: config.slow,
          })}
          video={props.video}
        />
      ) : null}
      {props.title ? (
        <AnimatedText
          style={useSpring({
            opacity: textView ? 1 : 0,
            transform: textView
              ? `translate3d(0, 0rem, 0)`
              : `translate3d(${props.x}, ${props.y}rem, 0)`,
            config: config.slow,
          })}
          client={props.client}
          layout={props.layout}
          color={props.color}
        >
          <Waypoint onEnter={() => setTextView(true)} />
          <h3>{props.title}</h3>
          <p>{props.copy}</p>
        </AnimatedText>
      ) : null}
    </>
  );
};
