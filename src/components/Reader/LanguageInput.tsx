import React, { Component } from "react";
import { Button, Form, Select, TextArea } from "semantic-ui-react";

type LanguageInputProps = {
  onSubmit: Function;
};

class LanguageInput extends Component<LanguageInputProps> {
  state = { text: "", language: "" };

  handleSubmit = () => {
    const { text, language } = this.state;
    this.props.onSubmit({ text: text, language: language });
  };

  render = () => {
    const { text, language } = this.state;

    const languages = [
      { key: "en", value: "ENGLISH", text: "English" },
      { key: "es", value: "SPANISH", text: "Spanish" },
      { key: "zh", value: "CHINESE", text: "Chinese" },
    ];

    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <TextArea
            placeholder="Enter some text that you would like to read"
            name="text"
            onChange={(e, { name, value }) => this.setState({ [name]: value })}
            value={text}
          />
          <Select
            placeholder="Which language is it in?"
            options={languages}
            name="language"
            onChange={(e, { name, value }) => this.setState({ [name]: value })}
            value={language}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </React.Fragment>
    );
  };
}

export default LanguageInput;
