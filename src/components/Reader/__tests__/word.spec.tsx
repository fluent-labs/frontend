import React from "react";
import renderer from "react-test-renderer";

import { Word } from "../Word";

describe("Word", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Word
          key="test"
          word={{
            token: "test",
            processedToken: "word",
            tag: "noun",
            lemma: "word",
            definitions: [],
          }}
          definitions={[{ id: "test", subdefinitions: [], tag: "noun" }]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
