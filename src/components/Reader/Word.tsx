import React from "react";

import { Button, Icon } from "semantic-ui-react";
import { WordDTO } from "../../client/api/ApiClient";

interface WordProps {
  // onDeselected(): void;
  // onSelected(): void;
  selected: boolean;
  word: WordDTO;
}

export const Word = ({ word, selected }: WordProps) => {
  const name = selected ? "delete" : "add";
  return (
    <Button icon labelPosition="right">
      {word.token}
      <Icon name={name} />
    </Button>
  );
};
