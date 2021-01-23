import React, { Component } from "react";
import { ApiClient, WordDTO } from "../../client/api/ApiClient";

import LanguageInput from "./LanguageInput";
import { SubmissionState, Vocabulary } from "./Vocabulary";

interface SubmitText {
  text: string;
  language: string;
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
    this.setState({ submissionState: SubmissionState.LOADING });
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
    return (
      <div>
        <LanguageInput onSubmit={this.handleSubmit} />
        <Vocabulary
          language={this.state.language}
          submissionState={this.state.submissionState}
          words={this.state.words}
        />
      </div>
    );
  };
}

export default Reader;
