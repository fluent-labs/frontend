import React from "react";
import PropTypes from "prop-types";

import { Card, Item } from "semantic-ui-react";
import { Definition } from "./Definition";
import { WordDTO } from "../../client/api/ApiClient";

type WordProps = {
  language: string;
  word: WordDTO;
};

type WordDisplayInfo = {
  header: string;
  meta: string;
};

const getWordInfo = (word: WordDTO): WordDisplayInfo => {
  return {
    header: `${word.token} (${word.lemma})`,
    meta: word.tag,
  };
};

const getChineseWordInfo = (word: WordDTO): WordDisplayInfo => {
  const pinyin =
    word.definitions.length > 0
      ? ` (${word.definitions[0].pronunciation})`
      : "";

  return {
    header: `${word.token}${pinyin}`,
    meta: word.tag,
  };
};

export const Word = ({ language, word }: WordProps) => {
  const wordInfo: WordDisplayInfo =
    language === "CHINESE" ? getChineseWordInfo(word) : getWordInfo(word);

  return (
    <Item>
      <Item.Content>
        <Item.Header as="a">{wordInfo.header}</Item.Header>
        <Item.Meta>{wordInfo.meta}</Item.Meta>
        <Item.Description>
          
          <Card.Group>
            {word.definitions.map((definition) => {
              return <Definition key={definition.id} definition={definition} />;
            })}
          </Card.Group>
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

Word.propTypes = {
  language: PropTypes.string.isRequired,
  word: PropTypes.object.isRequired,
};
