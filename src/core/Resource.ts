export enum ResourceTypes {
  Gold = 100,
  Oil = 3,
  Ore = 4,
  Uranium = 11,
  Diamonds = 15,
}

interface IResourceProps {
  type: ResourceTypes;
}

class Resource {
  type: ResourceTypes;

  constructor({ type }: IResourceProps) {
    this.type = type;
  }

  async getResourceMarketCost(c_html: string) {
    const resourceId = this.type;
    const data = await fetch(
      `https://rivalregions.com/graph/price/0/${resourceId}?c=${c_html}`
    );
    const response = await data.text();
    const result = response.slice(
      response.indexOf("series"),
      response.indexOf("negativeColor")
    );
    const arr = result
      .slice(result.indexOf("[[") + 1, -3)
      .replace(/\[\d+\, /g, "")
      .split("], ");
    const average = (
      arr.reduce((a, b) => a + parseFloat(b), 0) / arr.length
    ).toFixed(2);

    return Number(average);
  }
}

export default Resource;
