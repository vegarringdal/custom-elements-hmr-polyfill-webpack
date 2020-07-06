import { applyPolyfill, ReflowStrategy } from "custom-elements-hmr-polyfill";
applyPolyfill(ReflowStrategy.NONE);

// do not reload the imported modules
import "@vaadin/vaadin-date-picker";

async function app() {
  await import("./main.js");
  document.body.innerHTML = "";
  document.body.innerHTML = "<app-root></app-root>";
}

app();

if (module.hot) {
  module.hot.accept("./main.js", function (x) {
    app();
  });
}
