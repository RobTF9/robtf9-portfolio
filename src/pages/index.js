import React from "react";
import SEO from "../components/Layout/SEO";
import HomeHero from "../components/Home/HomeHero";
import ProjectList from "../components/Common/ProjectList";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <HomeHero />
    <ProjectList />
  </>
);

export default IndexPage;
