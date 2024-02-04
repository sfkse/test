import { html } from 'lit-html';
import { component } from 'haunted';
import { useShoppingList } from '../../../context/shoppingListContext';

const ShoppingList = () => {
  const { state, dispatch } = useShoppingList();

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const uniqueIngredients = Array.from(new Set(state.selectedDrinks.flatMap((drink) => drink.ingredients || [])));

  return html`
    <div class="shopping-list">
      <h2>Shopping List</h2>
      <ul>
        ${uniqueIngredients.map((ingredient) => html`<li>${ingredient}</li>`)}
      </ul>
      <button @click=${handleClearCart}>Clear Cart</button>
    </div>
  `;
};

customElements.define('shopping-element', component(ShoppingList));
