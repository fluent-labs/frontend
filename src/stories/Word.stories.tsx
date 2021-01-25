import React from "react";
import Definition from "../components/Reader/Definition";
import "semantic-ui-css/semantic.min.css";

export default {
  title: "Word",
  component: Definition,
};

export const English = () => (
  <Definition
    language="ENGLISH"
    word={{
      token: "Hello",
      tag: "Noun",
      lemma: "Hello",
      definitions: [
        {
          id: "mockId",
          subdefinitions: ["A greeting", "Something to greet others with"],
          tag: "Noun",
        },
      ],
    }}
  />
);

export const Chinese = () => (
  <Definition
    language="CHINESE"
    word={{
      token: "你好",
      tag: "Noun",
      lemma: "你好",
      definitions: [
        {
          id: "mockId",
          subdefinitions: ["欢迎观临", "您好"],
          tag: "Noun",
          hsk: "5",
          pronunciation: "ni3 hao3",
        },
      ],
    }}
  />
);
