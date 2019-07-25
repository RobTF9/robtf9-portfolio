import React from "react";

import Layout from "../components/layout";
import Listing from "../components/listing";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Listing />
  </Layout>
);

export default IndexPage;
