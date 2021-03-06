import React, { Component } from "react";
import { Button, Input, Radio } from "antd";

import "antd/lib/button/style/index.css";
import "antd/lib/input/style/index.css";
import "antd/lib/radio/style/index.css";

const { TextArea } = Input;

type LanguageInputProps = {
  onSubmit: Function;
};

class LanguageInput extends Component<LanguageInputProps> {
  state = { text: "", language: "ENGLISH" };

  handleSubmit = () => {
    const { text, language } = this.state;

    if (text.length > 0) {
      this.props.onSubmit(language, text);
    }
  };

  render = () => {
    const { text } = this.state;

    return (
      <React.Fragment>
        <TextArea
          id="languageinput"
          placeholder="Enter some text that you would like to read"
          name="text"
          onChange={(e) => this.setState({ text: e.target.value })}
          value={text}
        />
        <Radio.Group
          defaultValue="ENGLISH"
          buttonStyle="solid"
          onChange={(e) => {
            this.setState({ language: e.target.value });
            this.handleSubmit();
          }}
        >
          <Radio.Button value="ENGLISH">English</Radio.Button>
          <Radio.Button value="CHINESE">Chinese</Radio.Button>
          <Radio.Button value="SPANISH">Spanish</Radio.Button>
        </Radio.Group>
        <Button
          id="submittextbutton"
          type="primary"
          shape="round"
          onClick={(e) => this.handleSubmit()}
        >
          Submit
        </Button>
      </React.Fragment>
    );
  };
}

export default LanguageInput;
