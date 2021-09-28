import { useState } from "react"

import initialState from "../initialState"
import type { Product, StoreState } from "../types/product"

export const useInitialState = () => {
  const [products, setProducts] = useState<StoreState>(initialState)

  const addToCart = (p: Product): void => {
    setProducts({
      ...products,
      cart: [...products.cart, p]
    })
  }
  
  const removeFromCart = (id: string): void => {
    setProducts({
      ...products,
      cart: products.cart.filter(p => p.id !== id)
    })
  }

  return {
    products,
    addToCart,
    removeFromCart
  }
}