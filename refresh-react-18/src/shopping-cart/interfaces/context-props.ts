import { Dispatch, SetStateAction } from 'react';
import { Product, ProductCart } from './product';

export interface Filters {
  category: string;
  minPrice: number;
}

export interface FiltersContextProps {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<{ category: string; minPrice: number }>>;
}

export interface CartContextProps {
  cart: ProductCart[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
  removeFromCart: (product: Product) => void;
}

export enum CartActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
}

export type ActionType =
  | {
      type: CartActionType.ADD_TO_CART | CartActionType.REMOVE_FROM_CART;
      payload: Product;
    }
  | { type: CartActionType.CLEAR_CART };
