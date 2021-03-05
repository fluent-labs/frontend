import React from "react";
import renderer from "react-test-renderer";

import Benefits from "../benefits";

describe("Benefits", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Benefits
          translation={{
            benefits_subtitle: "Benefits",
            benefits_section_title: "A reader for the internet",
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
                text:
                  "See how common a word is, so you only learn the important ones.",
              },
              {
                title: "Integration",
                text: "Works with other tools you use like Anki.",
              },
            ],
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
