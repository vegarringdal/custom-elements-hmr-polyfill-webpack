/* import "../node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";
import "../node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"; */


import "document-register-element";

if (!window.globalThis) {
  window.globalThis = window;
}
import { applyPolyfill, ReflowStrategy } from "custom-elements-hmr-polyfill";
applyPolyfill(ReflowStrategy.NONE);
import { run } from "./app";
run();

let reloads = 0;

if (module.hot) {
  module.hot.accept("./app.js", function () {
    reloads++;
    console.log("Reloading", reloads);
    run();
  });
}
