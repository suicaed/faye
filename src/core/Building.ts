import { ResourceTypes } from "./Resource";

export enum BuildingTypes {
  Hospital = "Hospital",
  MilitaryBase = "MilitaryBase",
  School = "School",
  Missile = "Missile",
  SeaPort = "SeaPort",
  PowerPlant = "PowerPlant",
  SpacePort = "SpacePort",
  AirPort = "AirPort",
  HouseFund = "HouseFund",
}

export type IBuildingNames = {
  [key in BuildingTypes]: string;
};

export type IBuildingLevelResources = {
  [key in BuildingTypes]: {
    [key in ResourceTypes]: number;
  };
};

export interface IBuilding {
  type: BuildingTypes;
  currentLevel: number;
  maxLevel: number;
}
