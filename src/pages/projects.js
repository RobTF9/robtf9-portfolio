import React from "react";
import SEO from "../components/Layout/SEO";
import ProjectList from "../components/Common/ProjectList";
import Hero from "../components/Common/Hero";

const ProjectPage = () => (
  <>
    <SEO title="Projects" />
    <Hero>
      <h1>
        Latest <span>projects.</span>
      </h1>
    </Hero>
    <ProjectList />
  </>
);

export default ProjectPage;
