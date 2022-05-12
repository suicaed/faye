import { IExtModule, ModuleNames } from "../types/common";
import { EXT_MODULE_URL } from "../types/constants";

export default (url: string): IExtModule | undefined => {
  const module = Object.entries(EXT_MODULE_URL).find(([_, moduleUrl]) => moduleUrl.test(url));
  const [name, value] = module || [];

  if (name in ModuleNames) {
    return {
      [name as ModuleNames]: value,
    };
  }
};