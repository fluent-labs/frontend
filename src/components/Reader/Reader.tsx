import React, { useState } from "react";

import { Divider, Transition } from "semantic-ui-react";

import { ApiClient, DefinitionDTO, WordDTO } from "../../client/api/ApiClient";
import { Language, SubmissionState } from "../../types/Enums";
import LanguageInput from "./LanguageInput";
import { Vocabulary } from "./Vocabulary";

const client = new ApiClient();

export const Reader = () => {
  const [wordsState, setWordsState] = useState(SubmissionState.PENDING);
  const [definitionsState, setdefinitionsState] = useState(
    SubmissionState.PENDING
  );

  const [words, setWords] = useState(new Array<WordDTO>());
  const [definitions, setDefinitions] = useState(
    new Map<String, Array<DefinitionDTO>>()
  );

  const handleSubmit = (language: Language, text: string): Promise<void> => {
    return getWords(language, text).then((words) =>
      getDefinitions(language, words)
    );
  };

  const getWords = async (
    language: Language,
    text: string
  ): Promise<Array<WordDTO>> => {
    setWordsState(SubmissionState.LOADING);
    try {
      const result = await client.getWordsInDocument(language, text);
      setWords(result);
      setWordsState(SubmissionState.SUCCESS);
      return result;
    } catch (e) {
      setWordsState(SubmissionState.FAILURE);
      return words;
    }
  };

  const getDefinitions = (
    language: Language,
    words: Array<WordDTO>
  ): Promise<void> => {
    const tokens = words.map((word) => word.token);
    setdefinitionsState(SubmissionState.LOADING);

    return client
      .getDefinitions(language, tokens)
      .then((results) => {
        setDefinitions(results);
        setdefinitionsState(SubmissionState.SUCCESS);
      })
      .catch((e) => {
        setdefinitionsState(SubmissionState.FAILURE);
      });
  };

  const hasInput = wordsState === SubmissionState.PENDING;
  const hasWords = wordsState !== SubmissionState.PENDING;

  return (
    <div>
      <Transition visible={hasInput} animation="scale" duration={500}>
        <LanguageInput onSubmit={handleSubmit} />
      </Transition>
      <Divider />
      <Transition visible={hasWords} animation="scale" duration={500}>
        <Vocabulary submissionState={wordsState} words={words} />
      </Transition>
    </div>
  );
};
