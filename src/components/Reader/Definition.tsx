import React from "react";

import { Button, Card, List } from "semantic-ui-react";
import { DefinitionDTO } from "../../client/api/ApiClient";

export const Definition = (definition: DefinitionDTO) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header as="a">{definition.id}</Card.Header>
        <Card.Meta>Pronunciation: {definition.pronunciation}</Card.Meta>
        <Card.Description>
          Definitions:
          <List bulleted>
            {definition.subdefinitions.map((subdefinition) => {
              return <List.Item key={subdefinition}>{subdefinition}</List.Item>;
            })}
          </List>
        </Card.Description>
        <Card.Content extra>
          <Button basic color="green">
            Add to vocabulary
          </Button>
        </Card.Content>
      </Card.Content>
    </Card>
  );
};
