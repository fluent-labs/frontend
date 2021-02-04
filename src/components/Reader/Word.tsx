import React from "react";

import { Card, Popover, Typography } from "antd";
import { WordDTO, DefinitionDTO } from "../../client/api/ApiClient";

import "antd/lib/popover/style/index.css";
import "antd/lib/typography/style/index.css";

const { Text } = Typography;

interface WordProps {
  key: string;
  word: WordDTO;
  definitions: Array<DefinitionDTO>;
}

export const Word = ({ word, definitions }: WordProps) => {
  if (definitions.length > 0) {
    const content = (
      <Card title={definitions[0].pronunciation}>
        <ul>
          {definitions[0].subdefinitions.map((subdefinition: string) => (
            <li key={subdefinition}>{subdefinition}</li>
          ))}
        </ul>
      </Card>
    );

    return (
      <React.Fragment>
        <Popover content={content} title="Title" trigger={["hover"]}>
          <Text underline type="success">
            {word.token}
          </Text>
        </Popover>
        <Text> </Text>
      </React.Fragment>
    );
  }

  // No definition case, TODO find a good way to indicate it.
  return (
    <React.Fragment>
      <Text underline type="secondary">
        {word.token}
      </Text>
      <Text> </Text>
    </React.Fragment>
  );
};
