import { useState } from 'react';
import type { ProductChangeArgs } from '../../types/product';

type CartState = {
  [key: string]: ProductChangeArgs;
};

type ShoppingCart = {
  shoppingCart: CartState;
  onProductCountChange: (e: ProductChangeArgs) => void;
};

const NO_PRODUCT = 0;

function useShoppingCart(): ShoppingCart {
  const [shoppingCart, setShoppingCart] = useState<CartState>({});

  function onProductCountChange(event: ProductChangeArgs) {
    const { count, product } = event;

    setShoppingCart(prev => {
      const productInCart = prev[product.id] || { product, count: NO_PRODUCT };

      if (Math.max(productInCart.count + count, NO_PRODUCT) > NO_PRODUCT) {
        productInCart.count += count;

        return {
          ...prev,
          [product.id]: productInCart,
        };
      }

      delete prev[product.id];
      return { ...prev };
    });
  }

  return { shoppingCart, onProductCountChange };
}

export default useShoppingCart;
