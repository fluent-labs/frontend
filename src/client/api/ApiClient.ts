import axios from "axios";

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
  processedToken: string;
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
    language: string,
    token: string
  ): Promise<Array<DefinitionDTO>> => {
    const response = await axios.get<Array<DefinitionDTO>>(
      `${this.hostname}/v1/language/definition/${language}/${token}/`
    );
    return response.data;
  };

  getDefinitions = async (
    language: string,
    tokens: Array<string>
  ): Promise<Map<string, Array<DefinitionDTO>>> => {
    const response = await axios.post<Map<string, Array<DefinitionDTO>>>(
      `${this.hostname}/v1/language/definitions/${language}/ENGLISH/`,
      { words: tokens }
    );

    // Confusingly axios returns an object, not a map.
    // We manually do the conversion here.
    const definitions = new Map<string, Array<DefinitionDTO>>();
    for (const [key, value] of Object.entries(response.data)) {
      definitions.set(key, value);
    }

    return definitions;
  };

  getWordsInDocument = async (
    language: string,
    document: string
  ): Promise<Array<WordDTO>> => {
    const response = await axios.post<Array<WordDTO>>(
      `${this.hostname}/v1/language/document/${language}/`,
      { text: document }
    );
    return response.data;
  };
}
