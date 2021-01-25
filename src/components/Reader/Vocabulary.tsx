import React from "react";

import {
  Card,
  Container,
  Dimmer,
  Divider,
  Header,
  Loader,
} from "semantic-ui-react";

import Definition from "./Definition";
import { Word } from "./Word";
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
          return <Word key={word.token} word={word} selected />;
        })}
      </Container>
      <Divider />
      <Card.Group>
        {words.map((word: WordDTO) => (
          <Definition key={word.token} language={language} word={word} />
        ))}
      </Card.Group>
    </div>
  );
};
