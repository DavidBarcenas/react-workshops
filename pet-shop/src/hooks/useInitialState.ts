import { useState } from "react"

import initialState from "../initialState"
import type { Product, StoreState } from "../types/product"

export const useInitialState = () => {
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

  return {
    state,
    addToCart,
    removeFromCart
  }
}