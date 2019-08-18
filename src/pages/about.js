import React from "react";
import SEO from "../components/Layout/SEO";
import Hero from "../components/Common/Hero";
import Container from "../components/Common/Container";
import styled from "styled-components";
import breakpoints from "../shared/breakpoints";
import { useSpring, config } from "react-spring";
import { Link } from "gatsby";
import colors from "../shared/colors";

const About = () => {
  const animation = useSpring({
    transform: "translate3d(0, 0rem, 0)",
    from: { transform: "translate3d(0, 15rem, 0)" },
    config: config.molasses,
  });

  return (
    <>
      <SEO title="About" />
      <Hero>
        <span>About</span> me
      </Hero>
      <AboutContainer style={animation}>
        <p>
          <strong>
            By day I work as a UI designer with a focus on creating compelling
            interactions. I spend my free time working on full-stack development
            projects to broaden my knowledge.
          </strong>
        </p>
        <p>
          I originally trained as a graphic designer, studying at the Arts
          University Bournemouth. My time here gave me a great foundation in
          layout, hierarchy and visual design.
        </p>
        <p>
          It’s also where my keen eye for typography originated. After finishing
          my degree in 2014 I jumped head first into the digital industry
          learning all I could about the world of user centred design and
          research from a variety of intern, freelance and permanent positions.
        </p>
        <p>
          Take a look at my <Link to="/experience">experience</Link> if you want
          to see the full picture.
        </p>
        <p>
          Five years later my day job is at renowned Bristol agency Proctor +
          Stevenson. My role is varied and always interesting, there is no
          typical day. I could be working on anything from design systems for
          international companies, ux optimisation, or interaction design.
          Outside of work I like to challenge myself by working on full stack
          freelance projects or learning new skills.
        </p>
        <p>
          If that sounds like someone you’d like to collaborate with then{" "}
          <Link to="/contact">get in touch.</Link>
        </p>
      </AboutContainer>
    </>
  );
};

export default About;

const AboutContainer = styled(Container)`
  grid-gap: 3rem;

  ${breakpoints.tablet} {
    grid-gap: 3rem;
  }

  ${breakpoints.desktop} {
    grid-gap: 3rem;
    grid-column: 7 / 11;
  }

  a {
    color: ${colors.blue};
  }
`;
