
import { createContext, useContext, useReducer } from 'haunted';

const ShoppingListContext = createContext();

const shoppingListReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, selectedDrinks: [...state.selectedDrinks, action.drink] };
        case 'CLEAR_CART':
            return { ...state, selectedDrinks: [] };
        default:
            return state;
    }
};

export const ShoppingListProvider = ({ children }) => {
    const initialState = {
        selectedDrinks: [],
    };
    const [state, dispatch] = useReducer(shoppingListReducer, initialState);

    return html`
    <${ShoppingListContext.Provider} .value=${{ state, dispatch }}>
      ${children}
    <//>
  `;
};

export const useShoppingList = () => {
    const context = useContext(ShoppingListContext);
    if (!context) {
        throw new Error('useShoppingList must be used within a ShoppingListProvider');
    }
    return context;
};
