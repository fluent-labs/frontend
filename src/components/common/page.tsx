import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout/layout";
import SEO from "./layout/seo";
import Navigation from "./navigation/navigation";

import Footer from "../sections/footer";

interface PageProps {
  children: React.ReactNode;
  title: string;
}

const Page = ({ children, title }: PageProps) => (
  <Layout>
    <SEO title={title} />
    <Navigation />
    <>{children}</>
    <Footer />
  </Layout>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
