import React from "react";
import { storiesOf } from "@storybook/react";

import Benefits from "../components/sections/benefits";
import GetStarted from "../components/sections/getstarted";

const stories = storiesOf("Home Page Sections", module);

const benefits_translation = {
  benefits_subtitle: "A reader for the internet",
  benefits_section_title: "Benefits",
  benefits_entries: [
    {
      title: "Definitions",
      text:
        "See the meaning of any unfamiliar word, defined in your native language.",
    },
    {
      title: "Vocabulary",
      text:
        "We remember which words you know, so you can focus on the new ones.",
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
}

stories.add("Benefits", () => <Benefits translation={benefits_translation} />);
stories.add("Get Started", () => <GetStarted translation={get_started_translation} />);
