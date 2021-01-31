import React from "react";

import { Container, Header } from "semantic-ui-react";

import { WordSelector } from "./WordSelector";
import { DefinitionDTO, WordDTO } from "../../client/api/ApiClient";

interface VocabularyProps {
  text: string;
  words: Array<WordDTO>;
  definitions: Map<String, Array<DefinitionDTO>>;
}

export const Vocabulary = ({ words }: VocabularyProps) => {
  return (
    <Container text>
      <Header as="h2">Words</Header>
      {words.map((word) => {
        return <WordSelector key={word.token} word={word} selected />;
      })}
    </Container>
  );
};
