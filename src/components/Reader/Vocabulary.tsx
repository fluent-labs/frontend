import React from "react";

import { Card, Dimmer, Loader } from "semantic-ui-react";
import Definition from "./Definition";
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
    <Card.Group>
      {words.map((word: WordDTO) => (
        <Definition key={word.token} language={language} word={word} />
      ))}
    </Card.Group>
  );
};
