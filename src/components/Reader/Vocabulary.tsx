import React, { Component } from "react";

import { Card, Dimmer, Loader } from "semantic-ui-react";
import Word from "./Word";
import { ApiClient, WordDTO } from "../../client/api/ApiClient";

interface VocabularyProps {
  language: string;
  text: string;
};

interface VocabularyState {
  submissionState: SubmissionState;
  data: Array<WordDTO>;
}

enum SubmissionState {
  PENDING,
  LOADING,
  SUCCESS,
  FAILURE
}

class Vocabulary extends Component<VocabularyProps, VocabularyState> {
  state = { submissionState: SubmissionState.PENDING, data: [] };
  client = new ApiClient();

  submit = (language: string, text: string) => {
    this.setState({ submissionState: SubmissionState.LOADING });
    this.client.getWordsInDocument(language, text).then(result => {
      this.setState({ submissionState: SubmissionState.SUCCESS, data: result});
    }).catch(e => {
      this.setState({ submissionState: SubmissionState.FAILURE });
    });
  }

  render = () => {

    if (this.state.submissionState === SubmissionState.PENDING) return <p>Submit text to see some vocabulary.</p>;

    if (this.state.submissionState === SubmissionState.LOADING) {
      return (
        <Dimmer active>
          <Loader />
        </Dimmer>
      );
    }
    if (this.state.submissionState === SubmissionState.FAILURE) return <p>Error loading vocabulary.</p>;

    return (
      <Card.Group>
        {this.state.data.map((word: WordDTO) => (
          <Word key={word.token} language={this.props.language} word={word} />
        ))}
      </Card.Group>
    );
  };
};

export default Vocabulary;
