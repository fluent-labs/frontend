import { DefinitionDTO } from "../client/api/ApiClient";

export class DefinitionsStore {
  definitions: Map<string, Array<DefinitionDTO>> = new Map();

  constructor(newDefinitions: Map<string, Array<DefinitionDTO>>) {
    this.definitions = newDefinitions;
  }

  get = (token: string): Array<DefinitionDTO> => {
    return this.getOrDefault(token, []);
  };

  getOrDefault = (
    token: string,
    defaultResult: Array<DefinitionDTO>
  ): Array<DefinitionDTO> => {
    const defs: Array<DefinitionDTO> | undefined = this.definitions.get(token);
    if (defs === undefined) {
      return defaultResult;
    } else {
      return defs;
    }
  };
}
