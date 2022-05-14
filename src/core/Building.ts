export enum BuildingTypes {
  Hospital = 'Hospital',
  MilitaryBase = 'MilitaryBase',
  School = 'School',
  Missile = 'Missile',
  SeaPort = 'SeaPort',
  PowerPlant = 'PowerPlant',
  SpacePort = 'SpacePort',
  AirPort = 'AirPort',
  HouseFund = 'HouseFund',
}

export type IBuildingNames = {
  [key in BuildingTypes]: string;
}

export interface IBuilding {
  type: BuildingTypes;
  currentLevel: number;
  maxLevel: number;
}