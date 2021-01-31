import React from "react";

import { Container } from "semantic-ui-react";

import { WordSelector } from "./WordSelector";
import { DefinitionDTO, WordDTO } from "../../client/api/ApiClient";

interface VocabularyProps {
  text: string;
  words: Array<WordDTO>;
  definitions: Map<String, Array<DefinitionDTO>>;
}

export const Vocabulary = ({ text, words }: VocabularyProps) => {
  const tokens = words.map((word) => word.token);

  if (words.length == 0) {
    return (<Container text>{text}</Container>);
  }

  return (
    <Container text>
      {words.map((word) => {
        return <WordSelector key={word.token} word={word} selected />;
      })}
    </Container>
  );
};
