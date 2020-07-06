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
