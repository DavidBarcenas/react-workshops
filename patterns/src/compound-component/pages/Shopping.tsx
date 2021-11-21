import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import styles from '../styles/styles.module.css';
import type { Product } from '../../types/product';

const products: Product[] = [
  { id: '1', title: ' Coffee Mug', image: './coffee-mug.png' },
  { id: '2', title: ' Other' },
];

function ShoppingPage(): JSX.Element {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div className={styles.products}>
        <ProductCard product={products[0]}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={products[1]} className={styles.bgDark}>
          <ProductImage />
          <ProductTitle title="Nike Shirt" className={styles.textWhite} />
          <ProductButtons className={styles.myButtons} />
        </ProductCard>
      </div>
    </div>
  );
}

export default ShoppingPage;
