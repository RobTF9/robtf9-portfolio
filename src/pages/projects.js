import React from "react";
import SEO from "../components/Layout/SEO";
import ProjectList from "../components/Common/ProjectList";
import Hero from "../components/Common/Hero";

const ProjectPage = () => (
  <>
    <SEO title="Projects" />
    <Hero>
      Latest <span>projects.</span>
    </Hero>
    <ProjectList />
  </>
);

export default ProjectPage;
