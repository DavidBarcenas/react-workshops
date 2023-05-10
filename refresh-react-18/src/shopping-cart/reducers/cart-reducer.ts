import { ProductCart } from '../interfaces/product';
import { ActionType, CartActionType } from '../interfaces/context-props';

export const reducer = (state: ProductCart[], action: ActionType) => {
  switch (action.type) {
    case CartActionType.ADD_TO_CART: {
      const productIndex = state.findIndex((p) => p.id === action.payload?.id);

      if (productIndex >= 0) {
        const newState = [...state];
        newState[productIndex].quantity += 1;
        return newState;
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }
    case CartActionType.REMOVE_FROM_CART:
      return state.filter((product) => product.id !== action.payload?.id);
    case CartActionType.CLEAR_CART:
      return [];
    default:
      return state;
  }
};
