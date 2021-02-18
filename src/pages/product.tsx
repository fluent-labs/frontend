import React from "react";

import Layout from "../components/common/layout/layout";
import SEO from "../components/common/layout/seo";
import { Reader } from "../components/Reader/Reader";

import Footer from "../components/sections/footer";
import { Container } from "../components/global";

const IndexPage = () => (
  <Layout>
    <SEO title="Product" />
    <Container>
      <Reader />
    </Container>
    <Footer />
  </Layout>
);

export default IndexPage;