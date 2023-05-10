import { createContext, ReactNode, useReducer } from 'react';
import { Product, ProductCart } from '../interfaces/product';
import { CartActionType, CartContextProps } from '../interfaces/context-props';
import { reducer } from '../reducers/cart-reducer';

const initialState: ProductCart[] = [];

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
