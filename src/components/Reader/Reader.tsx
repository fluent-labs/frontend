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
  };

  handleSubmit = ({ text, language }: SubmitText) => {
    this.setState({
      language: language,
      text: text,
    });
  };

  render = () => {
    return (
      <div>
        <LanguageInput onSubmit={this.handleSubmit} />
        <Vocabulary language={this.state.language} />
      </div>
    );
  };
}

export default Reader;
