import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/Layout/SEO";

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div>
        <h1>About us</h1>
        <p>Hello I'm Rob</p>
      </div>
    </Layout>
  );
};

export default About;
