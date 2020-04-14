export function run() {

  console.log("<---------Starting app----------->");

  class SimpleGreeting extends HTMLElement {
    connectedCallback() {
      this.innerHTML = "innerhtml";
    }
  }
  customElements.define("app-root", SimpleGreeting);

  document.body.innerHTML = "<app-root></app-root>";
}
