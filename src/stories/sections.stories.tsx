/* eslint-disable camelcase, no-unused-vars */
import React from "react";
import { storiesOf } from "@storybook/react";

import Header from "../components/sections/header";
import Benefits from "../components/sections/benefits";
import GetStarted from "../components/sections/getstarted";

const stories = storiesOf("Home Page Sections", module);

const header_translation = {
  header_subtitle: "Read without boundaries",
  header_title_one: "Read what you want,",
  header_title_two: "in any language.",
  header_title_three:
    "Our reading app combines the support of a textbook with the freedom of the internet. Sign up to get early access.",
  header_input_placeholder: "Your email",
  header_button_text: "EARLY ACCESS",
  header_form_subtitle: "Already have a beta account?",
  header_form_subtitle_link_text: "Sign In",
};

const benefits_translation = {
  benefits_subtitle: "A reader for the internet",
  benefits_section_title: "Benefits",
  benefits_entries: [
    {
      title: "Definitions",
      text: "See the meaning of any unfamiliar word, defined in your native language.",
    },
    {
      title: "Vocabulary",
      text: "We remember which words you know, so you can focus on the new ones.",
    },
    {
      title: "Difficulty",
      text: "See how common a word is, so you only learn the important ones.",
    },
    {
      title: "Integration",
      text: "Works with other tools you use like Anki.",
    },
  ],
};

const get_started_translation = {
  get_started_title: "Be the first to get the beta",
  try_it_button_text: "Get early access",
  get_started_subtitle: "No credit card required.",
};

// stories.add("Header", () => <Header translation={header_translation} />);
stories.add("Benefits", () => <Benefits translation={benefits_translation} />);
stories.add("Get Started", () => (
  <GetStarted translation={get_started_translation} />
));
