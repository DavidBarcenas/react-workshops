import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import useShoppingCart from '../hooks/useShoppingCart';
import { products } from '../data/products';
import styles from '../styles/styles.module.css';

const NO_PRODUCT = 0;

function ShoppingPage(): JSX.Element {
  const { onProductCountChange, shoppingCart } = useShoppingCart();

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
