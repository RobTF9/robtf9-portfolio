import React from "react";
import SEO from "../components/Layout/SEO";
import ProjectList from "../components/Common/ProjectList";

const ProjectPage = () => (
  <>
    <SEO title="Projects" />
    <h1>Latest projects</h1>
    <ProjectList />
  </>
);

export default ProjectPage;
