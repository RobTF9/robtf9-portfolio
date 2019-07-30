import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import HomeHero from "../components/Home/HomeHero";
import ProjectList from "../components/Common/ProjectList";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <HomeHero />
    <ProjectList />
  </Layout>
);

export default IndexPage;
