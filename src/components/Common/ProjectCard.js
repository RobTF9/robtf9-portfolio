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
    setVisible(false);
  };

  return (
    <Link to={`/projects/${project.slug}`}>
      <Waypoint
        onEnter={handleEnter}
        onLeave={handleExit}
        bottomOffset="49%"
        topOffset="49%"
      >
        <Card color={project.color}>
          <Copy
            style={{
              transform: animation.y.interpolate(y => `translateY(-${y}rem)`),
              opacity: animation.o,
            }}
          >
            <p>{project.client}</p>
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
                y => `translateY(${y + 0.6}rem)`
              ),
              opacity: animation.o,
            }}
          >
            <h4>Read more</h4>
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
  margin-bottom: 8rem;
  padding: 4rem 2rem;

  ${breakpoints.tablet} {
    margin-bottom: 16rem;
  }
`;

const Copy = styled(animated.div)`
  margin-bottom: 4rem;

  ${breakpoints.tablet} {
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
    min-width: 100%;
    max-width: 100%;
    height: auto;
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
`;
