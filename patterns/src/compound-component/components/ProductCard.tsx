import useCounter from '../hooks/useCounter';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import type { Product } from '../../types/product';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props): JSX.Element {
  const value = 1;
  const { counter, increaseBy } = useCounter(value);
  const image = product.image || noImage;

  return (
    <div className={styles.productCard}>
      <img src={image} alt={product.title} className={styles.productImg} />
      <span className={styles.productDescription}>{product.title}</span>

      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-value)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+value)}>
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
