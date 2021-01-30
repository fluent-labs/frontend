import axios from "axios";
import { Language } from "../../types/Enums";

export type DefinitionDTO = {
  id: string;
  subdefinitions: Array<string>;
  tag: string;
  examples?: Array<string>;
  simplified?: string;
  traditional?: string;
  pronunciation?: string;
  hsk?: string;
};

export type WordDTO = {
  token: string;
  tag: string;
  lemma: string;
  definitions: Array<DefinitionDTO>;
};

export class ApiClient {
  hostname =
    window.location.hostname === "localhost"
      ? "http://localhost:9000"
      : "https://api.foreignlanguagereader.com";

  getDefinition = async (
    language: Language,
    token: string
  ): Promise<Array<DefinitionDTO>> => {
    const response = await axios.get<Array<DefinitionDTO>>(
      `${this.hostname}/v1/language/definition/${language}/${token}/`
    );
    return response.data;
  };

  getDefinitions = async (
    language: Language,
    tokens: Array<string>
  ): Promise<Map<string, Array<DefinitionDTO>>> => {
    const response = await axios.post<Map<string, Array<DefinitionDTO>>>(
      `${this.hostname}/v1/language/definitions/${language}/ENGLISH/`,
      { words: tokens }
    );
    return response.data;
  };

  getWordsInDocument = async (
    language: Language,
    document: string
  ): Promise<Array<WordDTO>> => {
    const response = await axios.post<Array<WordDTO>>(
      `${this.hostname}/v1/language/document/${language}/`,
      { text: document }
    );
    return response.data;
  };
}
