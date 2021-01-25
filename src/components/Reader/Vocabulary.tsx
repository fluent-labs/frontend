import React from "react";

import {
  Container,
  Dimmer,
  Divider,
  Item,
  Header,
  Loader,
} from "semantic-ui-react";

import { Word } from "./Word";
import { WordSelector } from "./WordSelector";
import { WordDTO } from "../../client/api/ApiClient";
import { SubmissionState } from "./Reader";

interface VocabularyProps {
  language: string;
  submissionState: SubmissionState;
  words: Array<WordDTO>;
}

export const Vocabulary = ({
  language,
  submissionState,
  words,
}: VocabularyProps) => {
  if (submissionState === SubmissionState.PENDING)
    return <p>Submit text to see some vocabulary.</p>;

  if (submissionState === SubmissionState.LOADING) {
    return (
      <Dimmer active>
        <Loader />
      </Dimmer>
    );
  }
  if (submissionState === SubmissionState.FAILURE)
    return <p>Error loading vocabulary.</p>;

  return (
    <div>
      <Container text>
        <Header as="h2">Words</Header>
        {words.map((word) => {
          return <WordSelector key={word.token} word={word} selected />;
        })}
      </Container>
      <Divider />
      <Item.Group divided>
        {words.map((word: WordDTO) => (
          <Word key={word.token} language={language} word={word} />
        ))}
      </Item.Group>
    </div>
  );
};
