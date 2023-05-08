import { createContext, ReactNode, useReducer } from 'react';
import { Product, ProductCart } from '../interfaces/product';
import { ActionType, CartActionType, CartContextProps } from '../interfaces/context-props';

const initialState: ProductCart[] = [];
const reducer = (state: ProductCart[], action: ActionType) => {
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

export const CartContext = createContext<CartContextProps | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product: Product) =>
    dispatch({
      type: CartActionType.ADD_TO_CART,
      payload: product,
    });

  const removeFromCart = (product: Product) =>
    dispatch({
      type: CartActionType.REMOVE_FROM_CART,
      payload: product,
    });

  const clearCart = () =>
    dispatch({
      type: CartActionType.CLEAR_CART,
    });

  return (
    <CartContext.Provider value={{ cart: state, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
