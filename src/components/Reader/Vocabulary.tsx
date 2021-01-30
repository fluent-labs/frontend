import React from "react";

import { Container, Dimmer, Header, Loader } from "semantic-ui-react";

import { WordSelector } from "./WordSelector";
import { WordDTO } from "../../client/api/ApiClient";
import { SubmissionState } from "../../types/Enums";

interface VocabularyProps {
  submissionState: SubmissionState;
  words: Array<WordDTO>;
}

export const Vocabulary = ({ submissionState, words }: VocabularyProps) => {
  if (submissionState === SubmissionState.PENDING)
    return <Container text>Submit text to see some vocabulary.</Container>;

  if (submissionState === SubmissionState.LOADING) {
    return (
      <Dimmer active>
        <Loader />
      </Dimmer>
    );
  }
  if (submissionState === SubmissionState.FAILURE)
    return <Container text>Error loading vocabulary.</Container>;

  return (
    <Container text>
      <Header as="h2">Words</Header>
      {words.map((word) => {
        return <WordSelector key={word.token} word={word} selected />;
      })}
    </Container>
  );
};
