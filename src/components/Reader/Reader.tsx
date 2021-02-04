import React, { useEffect, useState } from "react";

import { Divider } from "antd";

import { ApiClient, WordDTO } from "../../client/api/ApiClient";
import { DefinitionsStore } from "../../model/DefinitionsStore";
import LanguageInput from "./LanguageInput";
import { Vocabulary } from "./Vocabulary";

const client = new ApiClient();

const emptyArray: WordDTO[] = [];

export const Reader = () => {
  const [submitted, setSubmitted] = useState(false);

  const [language, setLanguage] = useState("ENGLISH");
  const [text, setText] = useState("");

  const [words, setWords] = useState(emptyArray);
  const [definitions, setDefinitions] = useState(new DefinitionsStore(new Map()));

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
        // This mutates the object anyway, but we want to trigger a re-rendering.
        setDefinitions(new DefinitionsStore(results));
      });
    }
  }, [language, words]);

  const handleSubmit = async (lang: string, doc: string): Promise<void> => {
    setLanguage(lang);
    setText(doc);
    setSubmitted(true);
  };

  return (
    <React.Fragment>
      <LanguageInput onSubmit={handleSubmit} />
      <Divider />
      <Vocabulary text={text} words={words} definitions={definitions} />
    </React.Fragment>
  );
};
