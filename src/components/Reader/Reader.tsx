import React, { useState } from "react";

import { Divider, Transition } from "semantic-ui-react";

import { ApiClient, DefinitionDTO, WordDTO } from "../../client/api/ApiClient";
import { SubmissionState } from "../../types/Enums";
import LanguageInput from "./LanguageInput";
import { Vocabulary } from "./Vocabulary";

const client = new ApiClient();

const emptyArray: WordDTO[] = [];

export const Reader = () => {
  const [wordsState, setWordsState] = useState(SubmissionState.PENDING);
  const [definitionsState, setDefinitionsState] = useState(
    SubmissionState.PENDING
  );

  const [words, setWords] = useState(emptyArray);
  const [definitions, setDefinitions] = useState(
    new Map<String, Array<DefinitionDTO>>()
  );

  const handleSubmit = async (language: string, text: string): Promise<void> => {
    const words = await getWords(language, text);
    return await getDefinitions(language, words);
  };

  const getWords = async (
    language: string,
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
    language: string,
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
  const hasDefinitions = definitionsState === SubmissionState.SUCCESS;

  return (
    <div>
      <Transition visible={hasInput} animation="scale" duration={500}>
        <LanguageInput onSubmit={handleSubmit} />
      </Transition>
      <Divider />
      <Transition visible={hasDefinitions} animation="scale" duration={500}>
        Definitions count: {definitions.size}
        <Vocabulary submissionState={wordsState} words={words} />
      </Transition>
    </div>
  );
};
