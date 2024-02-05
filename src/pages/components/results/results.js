import { html } from "lit-html";
import { component } from "haunted";
// import { useShoppingList } from "../../../context/shoppingListContext.js";
import "../../../context/shoppingListContext.js";

const Results = ({ searchData }) => {
  // const { state, dispatch } = useShoppingList();
  // console.log(state);
  const handleAddToCart = (drink) => {
    dispatch({ type: "ADD_TO_CART", drink });
  };
  return html`
    <shopping-list-consumer>
      <div class="results-container">
        ${searchData && searchData.length > 0
          ? searchData.map(
              (drink) => html`
                <div class="drink-item">
                  <div class="image-container">
                    <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
                  </div>
                  <div class="description-container">
                    <h3>${drink.strDrink}</h3>
                    <p>${drink.strInstructions}</p>
                  </div>
                  <button @click=${() => handleAddToCart(drink)} class="button">
                    Add
                  </button>
                </div>
              `
            )
          : html`<p>No results found.</p>`}
      </div>
    </shopping-list-consumer>
  `;
};

customElements.define("results-element", component(Results));
// Give images a fix height and width

