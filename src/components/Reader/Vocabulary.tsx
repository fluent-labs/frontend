import React from "react";

import { Typography } from "antd";

import { WordDTO } from "../../client/api/ApiClient";
import { DefinitionsStore } from "../../model/DefinitionsStore";
import { Word } from "./word";

const { Paragraph } = Typography;

interface VocabularyProps {
  text: string;
  words: Array<WordDTO>;
  definitions: DefinitionsStore;
}

export const Vocabulary = ({ text, words, definitions }: VocabularyProps) => {
  if (words.length == 0) {
    return <Paragraph>{text}</Paragraph>;
  }

  return (
    <Paragraph>
      {words.map((word: WordDTO) => {
        const token = word.processedToken;
        return (
          <Word
            key={word.token}
            word={word}
            definitions={definitions.get(token)}
          />
        );
      })}
    </Paragraph>
  );
};
