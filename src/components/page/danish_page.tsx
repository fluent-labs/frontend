import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../common/layout/layout";
import SEO from "../common/layout/seo";
import Navigation from "../common/navigation/navigation";

import Footer from "../common/footer/footer";

interface PageProps {
  children: React.ReactNode;
  title: string;
}

const Page = ({ children, title }: PageProps) => {
  const data = useStaticQuery(graphql`
    query {
      navigation: prismicNavigation(lang: { eq: "da-dk" }) {
        data {
          navigation_links {
            title
            href
            external
          }
          signup_text
        }
      }
      footer: prismicNavigation(lang: { eq: "da-dk" }) {
        data {
          footer_column_one_title
          footer_column_one_links {
            title
            href
            external
          }
          footer_column_two_title
          footer_column_two_links {
            title
            href
            external
          }
          footer_column_three_title
          footer_column_three_links {
            title
            href
            external
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title={title} />
      <Navigation translation={data.navigation.data} locale={"da-dk"} />
      <>{children}</>
      <Footer translation={data.footer.data} locale={"da-dk"} />
    </Layout>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
