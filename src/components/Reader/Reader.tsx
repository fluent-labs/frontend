import React, { Component } from "react";

import { Divider, Transition } from "semantic-ui-react";

import { ApiClient, WordDTO } from "../../client/api/ApiClient";
import LanguageInput from "./LanguageInput";
import { Vocabulary } from "./Vocabulary";

interface SubmitText {
  text: string;
  language: string;
}

export enum SubmissionState {
  PENDING,
  LOADING,
  SUCCESS,
  FAILURE,
}

interface ReaderProps {}

interface ReaderState {
  language: string;
  submissionState: SubmissionState;
  words: Array<WordDTO>;
}

class Reader extends Component<ReaderProps, ReaderState> {
  state = {
    language: "",
    submissionState: SubmissionState.PENDING,
    words: [],
  };
  client = new ApiClient();

  handleSubmit = ({ text, language }: SubmitText) => {
    this.setState({
      language: language,
      submissionState: SubmissionState.LOADING,
    });
    this.client
      .getWordsInDocument(language, text)
      .then((result) => {
        this.setState({
          submissionState: SubmissionState.SUCCESS,
          words: result,
        });
      })
      .catch((e) => {
        this.setState({ submissionState: SubmissionState.FAILURE });
      });
  };

  render = () => {
    const hasInput = this.state.submissionState === SubmissionState.PENDING;
    const hasWords = this.state.submissionState !== SubmissionState.PENDING;
    return (
      <div>
        <Transition visible={hasInput} animation="scale" duration={500}>
          <LanguageInput onSubmit={this.handleSubmit} />
        </Transition>
        <Divider />
        <Transition visible={hasWords} animation="scale" duration={500}>
          <Vocabulary
            language={this.state.language}
            submissionState={this.state.submissionState}
            words={this.state.words}
          />
        </Transition>
      </div>
    );
  };
}

export default Reader;
