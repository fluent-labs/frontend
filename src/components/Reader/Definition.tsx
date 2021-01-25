import React from "react";
import PropTypes from "prop-types";

import { Button, Card, List } from "semantic-ui-react";
import { WordDTO } from "../../client/api/ApiClient";

type DefinitionProps = {
  language: string;
  word: WordDTO;
};

type DefinitionDisplayInfo = {
  header: string;
  meta: string;
  definitions: Array<string>;
};

const getWordInfo = (word: WordDTO): DefinitionDisplayInfo => {
  return {
    header: `${word.token} (${word.lemma})`,
    meta: word.tag,
    definitions: word.definitions.flatMap(
      (definition) => definition.subdefinitions
    ),
  };
};

const getChineseWordInfo = (word: WordDTO): DefinitionDisplayInfo => {
  const pinyin =
    word.definitions.length > 0
      ? ` (${word.definitions[0].pronunciation})`
      : "";

  return {
    header: `${word.token}${pinyin}`,
    meta: word.tag,
    definitions: word.definitions.flatMap(
      (definition) => definition.subdefinitions
    ),
  };
};

const Definition = ({ language, word }: DefinitionProps) => {
  const wordInfo: DefinitionDisplayInfo =
    language === "CHINESE" ? getChineseWordInfo(word) : getWordInfo(word);

  return (
    <Card>
      <Card.Content>
        <Card.Header>{wordInfo.header}</Card.Header>
        <Card.Meta>{wordInfo.meta}</Card.Meta>
        <Card.Description>
          <List bulleted>
            {wordInfo.definitions.map((definition) => {
              return <List.Header key={definition}>{definition}</List.Header>;
            })}
          </List>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button basic color="green">
          Add to vocabulary
        </Button>
      </Card.Content>
    </Card>
  );
};

Definition.propTypes = {
  language: PropTypes.string.isRequired,
  word: PropTypes.object.isRequired,
};

export default Definition;
