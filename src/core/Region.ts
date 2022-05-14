import { IBuilding } from "./Building";

interface IRegionsProps {
  id: number;
  title: string;
  buildings: IBuilding[];
}

class Region {
  id: number;
  title: string;
  buildings: IBuilding[];
  cost: number;

  constructor({ id, title, buildings }: IRegionsProps) {
    this.id = id;
    this.title = title;
    this.buildings = buildings;
  }
}

export default Region;