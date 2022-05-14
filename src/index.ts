import getRegionBuildings from "./render/getRegionBuildings";
import renderRegionCost from "./render/renderRegionCost";
import { ModuleNames } from "./types/common";
import declareModuleName from "./utils/declareModuleName";

const target = document.getElementById('header_slide_inner');
const observer = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    if (mutation.addedNodes.length > 0) {
      const url = document.URL;
      const extModuleName = declareModuleName(url);

      switch (extModuleName) {
        case ModuleNames.RegionCost:
          const regionCostWrapper = document.querySelector('.slide_profile_photo');
          renderRegionCost(regionCostWrapper);
          console.log(`Regions buildings: ${JSON.stringify(getRegionBuildings(regionCostWrapper))}`);
          break;
        default:
          break;
      }
    }
  }
});

observer.observe(target, { childList: true });