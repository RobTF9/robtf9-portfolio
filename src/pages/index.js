import React, { useState, useEffect } from "react";
import SEO from "../components/Layout/SEO";
import HomeHero from "../components/Home/HomeHero";
import ProjectList from "../components/Common/ProjectList";
import { useSpring, animated, config } from "react-spring";

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
