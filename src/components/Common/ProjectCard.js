import React, { useState } from "react";
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

  const animation = useSpring({
    y: visible ? 5 : 0,
    o: visible ? 1 : 0,
    s: visible ? 1.2 : 1,
    config: config.stiff,
  });

  const handleEnter = () => {
    setVisible(true);
  };

  const handleExit = () => {
    setVisible(window.innerWidth < 1280 ? false : true);
  };

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
        <Card color={project.color}>
          <Copy
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
            style={{
              transform: animation.s.interpolate(s => `scale(${s})`),
              opacity: animation.o,
            }}
          >
            <Img fluid={project.featuredimage.childImageSharp.fluid} />
          </Image>
          <ReadMore
            style={{
              transform: animation.y.interpolate(
                y => `translate3d(0, ${y + 0.6}rem, 0)`
              ),
              opacity: animation.o,
            }}
          >
            Read more
            <MdArrowForward />
          </ReadMore>
        </Card>
      </Waypoint>
    </Link>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;

const Card = styled.article`
  position: relative;
  cursor: pointer;
  background-color: ${props => props.color};
  padding: 4rem 2rem;

  ${breakpoints.desktop} {
    padding: 0 2rem 5rem 2rem;
    padding-bottom: 30%;
  }
`;

const Copy = styled(animated.div)`
  margin-bottom: 4rem;

  h4 {
    font-weight: 400;
  }

  ${breakpoints.tablet} {
    width: 80%;
  }

  ${breakpoints.desktop} {
    margin-bottom: 0;
    padding-top: 4rem;
    width: 50%;
  }
`;

const Image = styled(animated.div)`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 4rem;

  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;

    ${breakpoints.desktop} {
      position: relative !important;
      max-height: 100%;
      max-width: 50%;
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
  right: 2rem;
  bottom: 4rem;
  color: ${colors.white};
  text-align: center;

  svg {
    font-size: 3.2rem;

    ${breakpoints.tablet} {
      font-size: 3.6rem;
    }
  }

  ${breakpoints.desktop} {
    right: 2rem;
  }
`;
