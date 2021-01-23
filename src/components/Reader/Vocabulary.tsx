import React from "react";
import PropTypes from "prop-types";

import { Card, Dimmer, Loader } from "semantic-ui-react";
import Word from "./Word";

type WordInfo = {
  token: string;
  language: string;
  tag: string;
  lemma: string;
  definitions: Array<string>;
  hsk?: number;
  pinyin?: string;
};

const Vocabulary = (language: string, text: string, submitted: boolean) => {
  const data: Array<WordInfo> = [];
  const loading = false;
  const error = true;

  if (!submitted) return <p>Submit text to see some vocabulary.</p>;

  if (loading) {
    return (
      <Dimmer active>
        <Loader />
      </Dimmer>
    );
  }
  if (error) return <p>Error loading vocabulary.</p>;

  return (
    <Card.Group>
      {data.map((word) => (
        <Word key={word.token} {...word} />
      ))}
    </Card.Group>
  );
};

Vocabulary.propTypes = {
  language: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
};

export default Vocabulary;
