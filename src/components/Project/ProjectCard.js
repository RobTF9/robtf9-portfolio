import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../shared/colors";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { MdArrowForward } from "react-icons/md";
import { Waypoint } from "react-waypoint";
import { useSpring, animated, config } from "react-spring";
import breakpoints from "../../shared/breakpoints";

const ProjectCard = ({ project }) => {
  const [visible, setVisible] = useState(false);
  const [height, setHeight] = useState(0);
  const heightRef = useRef(null);

  const animation = useSpring({
    y: visible ? 5 : 0,
    o: visible ? 1 : 0,
    s: visible ? 1.2 : 1,
    h: visible ? 0.5 : 1,
    r: visible ? 30 : 0,
    config: config.stiff,
  });

  const handleEnter = () => {
    setVisible(true);
  };

  const handleExit = () => {
    setVisible(false);
  };

  useEffect(() => {
    heightRef && setHeight(heightRef.current.clientHeight);
  }, []);

  return (
    <Link
      to={`/projects${project.slug}`}
      aria-label={`Read more about ${project.title}`}
    >
      <Waypoint
        onEnter={handleEnter}
        onLeave={handleExit}
        bottomOffset="300px"
        topOffset="300px"
      >
        <Card ref={heightRef}>
          <Copy
            color={project.color}
            style={{
              transform: animation.y.interpolate(
                y => `translate3d(0, -${y}rem, 0)`
              ),
              opacity: animation.o,
            }}
          >
            <h4>{project.client}</h4>
            <h2>{project.title}</h2>
          </Copy>
          <Image
            height={height}
            style={{
              transform: animation.s.interpolate(s => `scale(${s})`),
              opacity: animation.o,
            }}
          >
            <Img fluid={project.featuredimage.childImageSharp.fluid} />
          </Image>
          <ReadMore
            color={project.color}
            style={{
              transform: animation.y.interpolate(
                y => `translate3d(0, ${y}rem, 0)`
              ),
              opacity: animation.o,
            }}
          >
            Read more
            <MdArrowForward />
          </ReadMore>
          <Background
            color={project.color}
            style={{
              transform: animation.h.interpolate(h => `scale(1, ${h})`),
            }}
          />
          <TopLine
            style={{
              transform: animation.r.interpolate(r => `rotate(${r}deg)`),
            }}
            color={project.color}
          />
          <BottomLine
            style={{
              transform: animation.r.interpolate(r => `rotate(${r}deg)`),
            }}
            color={project.color}
          />
        </Card>
      </Waypoint>
    </Link>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;

const Line = styled(animated.div)`
  position: absolute;
  z-index: -1;
  border-top: 0.1rem ${({ color }) => color} solid;
  border-bottom: 0.1rem ${({ color }) => color} solid;
  width: 20%;
  height: 1.5rem;
`;

const TopLine = styled(Line)`
  top: 0;
  right: 0;
  transform: rotate(45deg);
  transform-origin: 100% 0%;
`;

const BottomLine = styled(Line)`
  bottom: 0;
  left: 0;
  transform: rotate(45deg);
  transform-origin: 0% 0%;
`;

const Card = styled.article`
  position: relative;
  cursor: pointer;
  background-color: ${props => props.color};
  padding: 0rem 0rem;

  ${breakpoints.desktop} {
    padding: 0 0rem 5rem 0rem;
    padding-bottom: 30%;
  }
`;

const Background = styled(animated.span)`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.color};
`;

const Copy = styled(animated.div)`
  width: 80%;

  h4 {
    color: ${({ color }) => color};
    font-weight: 400;
  }

  ${breakpoints.tablet} {
    width: 80%;
  }

  ${breakpoints.desktop} {
    margin-bottom: 0;
    padding-bottom: 4rem;
    width: 33%;
  }
`;

const Image = styled(animated.div)`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 4rem;

  ${breakpoints.desktop} {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: ${({ height }) => height}px !important;
    width: ${({ height }) => height}px !important;
  }

  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;

    ${breakpoints.desktop} {
      position: relative !important;
      max-height: 100%;
    }
  }

  ${breakpoints.desktop} {
    position: absolute;
    width: 100%;
    height: 100%;
    padding-bottom: 0%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const ReadMore = styled(animated.h4)`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  right: 0;
  bottom: 0rem;
  color: ${colors.white};
  text-align: center;

  svg {
    font-size: 3.2rem;
    color: ${({ color }) => color};

    ${breakpoints.tablet} {
      font-size: 3.6rem;
    }
  }
`;
