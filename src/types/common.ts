export type IExtModule = {
  [x in ModuleNames]: RegExp;
}

export enum ModuleNames {
  RegionCost = 'RegionCost',
}