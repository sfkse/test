import { html, render } from 'lit-html';
import { useState, component, useEffect } from 'haunted';

const Toast = () => {
  return html`
      <div>
        toast
      </div>
    `;
};

customElements.define('toast-element', component(Toast));