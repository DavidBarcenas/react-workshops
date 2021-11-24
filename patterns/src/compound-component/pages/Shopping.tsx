import { useState } from 'react';

import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import styles from '../styles/styles.module.css';
import type { Product, ProductChangeArgs } from '../../types/product';

type CartState = {
  [key: string]: ProductChangeArgs;
};

const products: Product[] = [
  { id: '1', title: ' Coffee Mug', image: './coffee-mug.png' },
  { id: '2', title: ' Coffee Mug - Meme', image: './coffee-mug2.png' },
];

const NO_PRODUCT = 0;

function ShoppingPage(): JSX.Element {
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

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div className={styles.shoppingCart}>
        {Object.values(shoppingCart).map(({ product, count }) => (
          <ProductCard
            key={product.id}
            product={product}
            value={count}
            onChange={onProductCountChange}
            className={styles.shoppingCartElement}>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </ProductCard>
        ))}
      </div>

      <div className={styles.products}>
        {products.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            value={shoppingCart[p.id]?.count || NO_PRODUCT}
            onChange={onProductCountChange}>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </ProductCard>
        ))}
      </div>
    </div>
  );
}

export default ShoppingPage;
