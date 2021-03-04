import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Page from "../components/page/english_page";

import Header from "../components/sections/header";
import Benefits from "../components/sections/benefits";
import GetStarted from "../components/sections/getstarted";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      header: prismicHomePage(lang: { eq: "en-us" }) {
        data {
          header_subtitle
          header_title_one
          header_title_two
          header_title_three
          header_input_placeholder
          header_button_text
          header_form_subtitle
          header_form_subtitle_link_text
        }
      }
      benefits: prismicHomePage(lang: { eq: "en-us" }) {
        data {
          benefits_subtitle
          benefits_section_title
          benefits_entries {
            title
            text
          }
        }
      }
      getStarted: prismicHomePage(lang: { eq: "en-us" }) {
        data {
          get_started_title
          try_it_button_text
          get_started_subtitle
        }
      }
    }
  `);

  return (
    <Page title="Home">
      <Header translation={data.header.data} />
      <Benefits translation={data.benefits.data} />
      <GetStarted translation={data.getStarted.data} />
    </Page>
  );
};

export default IndexPage;
