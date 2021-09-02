import React from "react";
import Intro from "@/components/Intro";
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import History from "@/components/History";

const Home: React.FC = () => (
  <Layout>
    <Nav />
    <Intro />
    <History />
  </Layout>
);

export default Home;
