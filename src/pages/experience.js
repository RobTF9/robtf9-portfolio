import React from "react";
import SEO from "../components/Layout/SEO";
import ExperienceList from "../components/Experience/ExperienceList";
import Hero from "../components/Common/Hero";

const Experience = () => {
  return (
    <>
      <SEO title="Experience" />
      <Hero>
        My <span>experience</span>
      </Hero>
      <ExperienceList />
    </>
  );
};

export default Experience;
