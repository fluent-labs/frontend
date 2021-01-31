import { DefinitionDTO } from "../client/api/ApiClient";

export class DefinitionsStore {
  definitions: Map<String, Array<DefinitionDTO>>;

  constructor(defs: Map<String, Array<DefinitionDTO>>) {
      this.definitions = defs
  }

  get = (token: string): Array<DefinitionDTO> => {
    return this.getOrDefault(token, []);
  }

  getOrDefault = (token: string, defaultResult: Array<DefinitionDTO>): Array<DefinitionDTO> => {
    let defs: Array<DefinitionDTO> | undefined = this.definitions.get(token);
    return (defs === undefined) ? defaultResult : defs as Array<DefinitionDTO>;
  }
}