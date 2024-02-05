import {
  html,
  component,
  createContext,
  useContext,
  useReducer,
} from "haunted";

const ShoppingListContext = createContext();

const shoppingListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        selectedDrinks: [...state.selectedDrinks, action.drink],
        showToaster: true,
      };
    case "CLEAR_CART":
      return { ...state, selectedDrinks: [] };
    default:
      return state;
  }
};

export const AppContext = ({ children }) => {
  const initialState = {
    selectedDrinks: [],
    showToaster: false,
  };
  const [state, dispatch] = useReducer(shoppingListReducer, initialState);
  console.log(state);
  return html`
    <shopping-list-provider .value=${{ state, dispatch }}>
      ${children}
    </shopping-list-provider>
  `;
};

customElements.define("shopping-list-provider", ShoppingListContext.Provider);
customElements.define("shopping-list-consumer", ShoppingListContext.Consumer);
customElements.define("use-context", component(AppContext));

// export const useShoppingList = () => {
//   const context = useContext(ShoppingListContext);
//   console.log(context);
//   // if (!context) {
//   //   throw new Error(
//   //     "useShoppingList must be used within a ShoppingListProvider"
//   //   );
//   // }
//   return context;
// };

