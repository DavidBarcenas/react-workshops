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

function ShoppingPage(): JSX.Element {
  const [shoppingCart, setShoppingCart] = useState<CartState>({});

  function onProductCountChange(event: ProductChangeArgs) {
    console.log('OnProductchange', event);
  }

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div className={styles.shoppingCart}>
        <ProductCard product={products[0]} className={styles.shoppingCartElement}>
          <ProductImage />
          <ProductButtons />
        </ProductCard>
        <ProductCard product={products[1]} className={styles.shoppingCartElement}>
          <ProductImage />
          <ProductButtons />
        </ProductCard>
      </div>

      <div className={styles.products}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} onChange={onProductCountChange}>
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
