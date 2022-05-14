import { BuildingTypes, IBuilding, IBuildingNames } from "../core/Building";
import { BuildingNamesRU } from "../locale";

export default (wrapper: Element): IBuilding[] => {
  const buildingTypesArray = (Object.keys(BuildingTypes) as Array<BuildingTypes>);
  const buildings = buildingTypesArray.map((type) => parseRegionBuilding(wrapper, type));

  return buildings;
}

const parseRegionBuilding = (wrapper: Element, type: BuildingTypes): IBuilding | undefined => {
  const buildingTitle = BuildingNamesRU[type];
  const source = wrapper.innerHTML;
  const regEx = new RegExp(`${buildingTitle}\\: (?<current>\\d+)(\\/)*(?<real>\\d+)*`);
  const buildingMatch = source.match(regEx);

  if (buildingMatch?.groups) {
    const currentLevel = Number(buildingMatch.groups?.current);
    const realLevel = Number(buildingMatch.groups?.real);
    const building: IBuilding = {
      type,
      currentLevel: currentLevel,
      maxLevel: realLevel || currentLevel,
    };

    return building;
  }
}