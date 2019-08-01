import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import ProjectList from "../components/Common/ProjectList";

const ProjectPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Projects" />
    <h1>Latest projects</h1>
    <ProjectList />
  </Layout>
);

export default ProjectPage;
