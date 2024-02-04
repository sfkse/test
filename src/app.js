import { html, render } from 'lit-html';
import { useState, component, useEffect } from 'haunted';
import './pages/page.js';
import { ShoppingListProvider } from './context/shoppingListContext.js';

const App = () => {


  return html`
  <${ShoppingListProvider}>
    <page-element></page-element>
    <//>
  `;
};

customElements.define('app-element', component(App));
