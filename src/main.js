export class SimpleGreeting extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<!-- template -->
        <h1>Hello World :-s/</h1>
        <vaadin-date-picker label="Label"></vaadin-date-picker>
        <vaadin-date-picker placeholder="Placeholder"></vaadin-date-picker>
        <vaadin-date-picker value="1990-01-30"></vaadin-date-picker>`;
  }
}

customElements.define("app-root", SimpleGreeting);
