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

const AnimatedImage = animated(Img);
const AnimatedText = animated(Text);

export const LeftContentBlock = props => {
  const [view, setView] = useState(false);
  const [textView, setTextView] = useState(false);

  useEffect(() => {
    setView(false);
    setTextView(false);
    return () => {
      setView(false);
      setTextView(false);
    };
  }, []);

  return (
    <LeftContent>
      <Waypoint onEnter={() => setView(true)} />
      {props.image ? (
        <AnimatedImage
          alt={`${props.client + "-" + (props.index + 1)}`}
          style={useSpring({
            opacity: view ? 1 : 0,
            transform: view
              ? `translate3d(0rem, 0, 0)`
              : `translate3d(-30rem, 0, 0)`,
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
              ? `translate3d(0rem, 0, 0)`
              : `translate3d(-30rem, 0, 0)`,
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
              ? `translate3d(0rem, 0, 0)`
              : `translate3d(-30rem, 0, 0)`,
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
    </LeftContent>
  );
};

export const RightContentBlock = props => {
  const [view, setView] = useState(false);
  const [textView, setTextView] = useState(false);

  useEffect(() => {
    setView(false);
    setTextView(false);
    return () => {
      setView(false);
      setTextView(false);
    };
  }, []);

  return (
    <RightContent>
      <Waypoint onEnter={() => setView(true)} />
      {props.image ? (
        <AnimatedImage
          alt={`${props.client + "-" + props.index}`}
          style={useSpring({
            opacity: view ? 1 : 0,
            transform: view
              ? `translate3d(0rem, 0, 0)`
              : `translate3d(30rem, 0, 0)`,
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
              ? `translate3d(0rem, 0, 0)`
              : `translate3d(30rem, 0, 0)`,
            config: config.slow,
          })}
          video={props.video}
        />
      ) : null}
      {props.title ? (
        <AnimatedText
          alt={`${props.client + "-" + props.index}`}
          style={useSpring({
            opacity: textView ? 1 : 0,
            transform: textView
              ? `translate3d(0rem, 0, 0)`
              : `translate3d(30rem, 0, 0)`,
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
    </RightContent>
  );
};

export const MiddleContentBlock = props => {
  const [view, setView] = useState(false);
  const [textView, setTextView] = useState(false);

  useEffect(() => {
    setView(false);
    setTextView(false);
    return () => {
      setView(false);
      setTextView(false);
    };
  }, []);

  return (
    <MiddleContent>
      <Waypoint onEnter={() => setView(true)} />
      {props.image ? (
        <AnimatedImage
          alt={`${props.client + "-" + props.index}`}
          style={useSpring({
            opacity: view ? 1 : 0,
            transform: view
              ? `translate3d(0, 0rem, 0)`
              : `translate3d(0, 30rem, 0)`,
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
              : `translate3d(0, 30rem, 0)`,
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
              : `translate3d(0, 30rem, 0)`,
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
    </MiddleContent>
  );
};
