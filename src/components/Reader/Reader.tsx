import React, { useEffect, useState } from "react";

import { Divider, Transition } from "semantic-ui-react";

import { ApiClient, DefinitionDTO, WordDTO } from "../../client/api/ApiClient";
import LanguageInput from "./LanguageInput";
import { Vocabulary } from "./Vocabulary";

const client = new ApiClient();

const emptyArray: WordDTO[] = [];

export const Reader = () => {
  const [submitted, setSubmitted] = useState(false);

  const [language, setLanguage] = useState("ENGLISH");
  const [text, setText] = useState("");

  const [words, setWords] = useState(emptyArray);
  const [definitions, setDefinitions] = useState(
    new Map<String, Array<DefinitionDTO>>()
  );

  // Do the tokenization and get the words from the document
  useEffect(() => {
    if (submitted) {
      client.getWordsInDocument(language, text).then((result) => {
        setWords(result);
      });
    }
  }, [submitted, language, text]);

  // Look up definitions for the words if submitted
  useEffect(() => {
    if (words.length > 0) {
      const tokens = words.map((word) => word.token);
      client.getDefinitions(language, tokens).then((results) => {
        setDefinitions(results);
      });
    }
  }, [language, words]);

  const handleSubmit = async (lang: string, doc: string): Promise<void> => {
    setLanguage(lang);
    setText(doc);
    setSubmitted(true);
  };

  return (
    <div>
      <Transition visible={!submitted} animation="scale" duration={500}>
        <LanguageInput onSubmit={handleSubmit} />
      </Transition>
      <Divider />
      <Transition visible={submitted} animation="scale" duration={500}>
        <Vocabulary words={words} />
      </Transition>
    </div>
  );
};
