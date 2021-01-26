import React from "react";

import { Button, Card, Item, Placeholder } from "semantic-ui-react";
import { Definition } from "./Definition";
import { ApiClient, DefinitionDTO, WordDTO } from "../../client/api/ApiClient";
import { Component } from "react";

type WordProps = {
  language: string;
  word: WordDTO;
};

interface WordState {
  definitions: Array<DefinitionDTO>;
  submissionState: SubmissionState;
}

type WordDisplayInfo = {
  header: string;
  meta: string;
};

export enum SubmissionState {
  LOADING,
  SUCCESS,
  FAILURE,
}

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

export class Word extends Component<WordProps, WordState> {
  state = {
    definitions: [],
    submissionState: SubmissionState.LOADING,
  };
  client = new ApiClient();

  componentDidMount = () => {
    const { language, word } = this.props;
    this.client
      .getDefinition(language, word.token)
      .then((result) =>
        this.setState({
          definitions: result,
          submissionState: SubmissionState.SUCCESS,
        })
      )
      .catch((e) =>
        this.setState({ submissionState: SubmissionState.FAILURE })
      );
  };

  getCards = () => {
    if (this.state.submissionState === SubmissionState.LOADING) {
      return (
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header as="a">
                <Placeholder.Line length="short" />
              </Card.Header>
              <Card.Meta>
                Pronunciation: <Placeholder.Line length="very short" />
              </Card.Meta>
              <Card.Description>
                Definitions:
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Card.Description>
              <Card.Content extra>
                <Button basic color="green">
                  Add to vocabulary
                </Button>
              </Card.Content>
            </Card.Content>
          </Card>
        </Card.Group>
      );
    } else {
      return (
        <Card.Group>
          {this.state.definitions.map((definition: DefinitionDTO) => {
            return <Definition key={definition.id} definition={definition} />;
          })}
        </Card.Group>
      );
    }
  };

  render = () => {
    const { language, word } = this.props;
    const wordInfo: WordDisplayInfo =
      language === "CHINESE" ? getChineseWordInfo(word) : getWordInfo(word);
    return (
      <Item>
        <Item.Content>
          <Item.Header as="a">{wordInfo.header}</Item.Header>
          <Item.Meta>{wordInfo.meta}</Item.Meta>
          <Item.Description>
            <Card.Group>
              {this.state.definitions.map((definition: DefinitionDTO) => {
                return (
                  <Definition key={definition.id} definition={definition} />
                );
              })}
              {/* {loadingCard} */}
            </Card.Group>
          </Item.Description>
        </Item.Content>
      </Item>
    );
  };
}
