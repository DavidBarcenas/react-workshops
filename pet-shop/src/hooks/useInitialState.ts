import { useState } from "react"

import initialState from "../initialState"
import type { Product, StoreState } from "../types/product"
import type { DetailForm } from '../types/detailForm';

export type InitState = {
  state: StoreState;
  addToCart: (p: Product) => void;
  removeFromCart: (id: string) => void;
  addToBuyer: (buyer: DetailForm) => void;
}

export const useInitialState = (): InitState => {
  const [state, setState] = useState<StoreState>(initialState)

  const addToCart = (p: Product): void => {
    setState({
      ...state,
      cart: [...state.cart, p]
    })
  }
  
  const removeFromCart = (id: string): void => {
    setState({
      ...state,
      cart: state.cart.filter(p => p.id !== id)
    })
  }

  const addToBuyer = (contactDetail: DetailForm): void => {
    setState({
      ...state,
      buyer: {...state.buyer, ...contactDetail}
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
    addToBuyer
  }
}