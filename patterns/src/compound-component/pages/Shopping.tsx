import ProductCard from '../components/ProductCard';
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
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default ShoppingPage;
