import React from "react";
import SEO from "../components/Layout/SEO";
import ExperienceList from "../components/Experience/ExperienceList";
import Hero from "../components/Common/Hero";

const Experience = () => {
  return (
    <>
      <SEO title="Experience" />
      <Hero>
        <h1>
          My <span>experience</span>
        </h1>
      </Hero>
      <ExperienceList />
    </>
  );
};

export default Experience;
