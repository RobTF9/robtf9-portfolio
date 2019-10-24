import React from "react";
import SEO from "../components/Layout/SEO";
import { ContentContainer } from "../components/Common/Container";
import { Link } from "gatsby";
import { animations } from "../shared/transitions";

const About = () => {
  return (
    <>
      <SEO title="About" />
      <ContentContainer style={animations.verticleSlide(`15rem`, 0)}>
        <h1>About</h1>
        <p>
          By day I work as a UI designer with a focus on creating compelling
          interactions. I spend my free time working on full-stack development
          projects to broaden my knowledge.
          <br />
          <br />
          I originally trained as a graphic designer, studying at the Arts
          University Bournemouth. My time here gave me a great foundation in
          layout, hierarchy and visual design.
          <br />
          <br />
          It’s also where my keen eye for typography originated. After finishing
          my degree in 2014 I jumped head first into the digital industry
          learning all I could about the world of user centred design and
          research from a variety of intern, freelance and permanent positions.
          <br />
          <br />
          Take a look at my <Link to="/experience">experience</Link> if you want
          to see the full picture.
          <br />
          <br />
          Five years later my day job is at renowned Bristol agency Proctor +
          Stevenson. My role is varied and always interesting, there is no
          typical day. I could be working on anything from design systems for
          international companies, ux optimisation, or interaction design.
          Outside of work I like to challenge myself by working on full stack
          freelance projects or learning new skills.
          <br />
          <br />
          If that sounds like someone you’d like to collaborate with then{" "}
          <Link to="/contact">get in touch.</Link>
        </p>
      </ContentContainer>
    </>
  );
};

export default About;
