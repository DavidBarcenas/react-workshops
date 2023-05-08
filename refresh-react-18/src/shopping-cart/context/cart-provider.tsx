import { createContext, ReactNode, useState } from 'react';
import { Product, ProductCart } from '../interfaces/product';

interface CartContextProps {
  cart: ProductCart[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
  removeFromCart: (product: Product) => void;
}

export const CartContext = createContext<CartContextProps | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ProductCart[]>([]);

  const addToCart = (product: Product) => {
    const productIndex = cart.findIndex((p) => p.id === product.id);

    if (productIndex >= 0) {
      const newCart = [...cart];
      newCart[productIndex].quantity += 1;
      setCart(newCart);
      return;
    }

    setCart((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (product: Product) => {
    setCart((prev) => prev.filter((p) => p.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
