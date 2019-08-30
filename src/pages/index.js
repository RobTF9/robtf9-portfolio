import React from "react";
import SEO from "../components/Layout/SEO";
import HomeHero from "../components/Home/HomeHero";
import ProjectList from "../components/Project/ProjectList";

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <HomeHero />
      <ProjectList />
    </>
  );
};

export default IndexPage;
