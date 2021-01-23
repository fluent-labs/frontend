import React from "react";
import PropTypes from "prop-types";

import { Button, Card, List } from "semantic-ui-react";

const Word = (language: string, token: string, tag: string, lemma: string, definitions: Array<string>, hsk?: number, pinyin?: string) => {

  let header = token;
  let meta;
  if (language === "CHINESE") {
    if (pinyin && pinyin != null) {
      header = header.concat(pinyin);
    }

    meta = "";
    if (tag && tag != null) {
      meta += tag;
    }
    if (hsk && hsk != null) {
      meta += ` - HSK: ${hsk}`;
    }
  } else {
    if (lemma && lemma != null) {
      header += ` (${lemma})`;
    }
    meta = tag;
  }

  return (
    <Card>
      <Card.Content>
        <Card.Header>{header}</Card.Header>
        <Card.Meta>{meta}</Card.Meta>
        <Card.Description>
          <List bulleted>
            {definitions &&
              definitions != null &&
              definitions.map((definition) => {
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

Word.propTypes = {
  language: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  tag: PropTypes.string,
  lemma: PropTypes.string,
  definitions: PropTypes.array,
  hsk: PropTypes.number,
  pinyin: PropTypes.array,
};

export default Word;
