import "@vaadin/vaadin-date-picker";

export function run() {
  console.log("<---------Starting app----------->");

  class SimpleGreeting extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<!-- template -->
        <vaadin-date-picker label="Labels"></vaadin-date-picker>
        <vaadin-date-picker placeholder="Placeholder"></vaadin-date-picker>
        <vaadin-date-picker value="1990-01-30"></vaadin-date-picker>`;
    }
  }
  customElements.define("app-root", SimpleGreeting);

  document.body.innerHTML = "<app-root></app-root>";
}
