export {};

declare global {
  interface Window {
    c_html: string | undefined;
  }
}

window.postMessage({ type: "FROM_PAGE", c_html: window.c_html }, "*");
