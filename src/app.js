import { html, render } from "lit-html";
import { component } from "haunted";
import "./pages/page.js";
import "./context/shoppingListContext";

const App = () => {
  return html`<page-element></page-element>`;
};
customElements.define("app-element", component(App));

