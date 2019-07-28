import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import HomeHero from "../components/Home/HomeHero";
import HomeProjectList from "../components/Home/HomeProjectList";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHero />
    <HomeProjectList />
  </Layout>
);

export default IndexPage;
