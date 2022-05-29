import Resource, { ResourceTypes } from "./core/Resource";
import getRegionBuildings from "./render/getRegionBuildings";
import renderRegionCost from "./render/renderRegionCost";
import { ModuleNames } from "./types/common";
import declareModuleName from "./utils/declareModuleName";

interface IState {
  c_html: string | undefined;
}

const state: IState = {
  c_html: undefined,
};

const webARScript = document.createElement("script");
webARScript.setAttribute("src", chrome.runtime.getURL("web.js"));
document.body.appendChild(webARScript);

window.addEventListener("message", (event) => {
  if (event.data.type && event.data.type == "FROM_PAGE") {
    if (event.data.c_html) {
      state.c_html = event.data.c_html;
    }
  }
});

const target = document.getElementById("header_slide_inner");

const observer = new MutationObserver(async (mutations) => {
  for (let mutation of mutations) {
    if (mutation.addedNodes.length > 0) {
      const url = document.URL;
      const extModuleName = declareModuleName(url);

      switch (extModuleName) {
        case ModuleNames.RegionCost:
          const regionCostWrapper = document.querySelector(
            ".slide_profile_photo"
          );
          renderRegionCost(regionCostWrapper);
          console.log(
            `Regions buildings: ${JSON.stringify(
              getRegionBuildings(regionCostWrapper)
            )}`
          );
          const r = new Resource({ type: ResourceTypes.Ore });
          const marketCost = await r.getResourceMarketCost(state.c_html);
          console.log(marketCost);
          break;
        default:
          break;
      }
    }
  }
});

observer.observe(target, { childList: true });
