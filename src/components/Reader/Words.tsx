import React from "react";

import { Container, Header } from "semantic-ui-react";
import { Word } from "./Word";
import { WordDTO } from "../../client/api/ApiClient";

interface WordsProps {
  words: Array<WordDTO>;
}

export const Words = ({ words }: WordsProps) => {
  return (
    <Container text>
      <Header as="h2">Words</Header>
      {words.map((word) => {
        return <Word key={word.token} word={word} selected />;
      })}
    </Container>
  );
};
