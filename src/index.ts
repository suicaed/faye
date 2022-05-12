import declareModuleName from "./utils/declareModuleName";

const target = document.getElementById('header_slide_inner');
const observer = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    if (mutation.addedNodes.length > 0) {
      const url = document.URL;
      const extModule = declareModuleName(url);
      console.log(extModule);
    }
  }
});

observer.observe(target, { childList: true });