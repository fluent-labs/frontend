import React from "react";

import { Button, Icon } from "semantic-ui-react";
import { WordDTO } from "../../client/api/ApiClient";

interface WordProps {
  // onDeselected(): void;
  // onSelected(): void;
  key: String;
  selected: boolean;
  word: WordDTO;
}

export const WordSelector = ({ word, selected }: WordProps) => {
  const name = selected ? "delete" : "add";
  return (
    <Button icon labelPosition="right">
      {word.token}
      <Icon name={name} />
    </Button>
  );
};
