import React, { Component } from "react";

import LanguageInput from "./LanguageInput";
import Vocabulary from "./Vocabulary";

interface SubmitText {
  text: string;
  language: string;
}

class Reader extends Component {
  state = {
    language: "",
    text: "",
    submitted: false,
  };

  handleSubmit = ({ text, language }: SubmitText) => {
    this.setState({
      language: language,
      submitted: true,
      text: text,
    });
  };

  render = () => {
    return (
      <div>
        <LanguageInput onSubmit={this.handleSubmit} />
        <Vocabulary
          language={this.state.language}
          text={this.state.text}
          submitted={this.state.submitted}
        />
      </div>
    );
  };
}

export default Reader;
