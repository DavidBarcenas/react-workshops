import { ReactNode } from 'react';

import useCounter from '../hooks/useCounter';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

import type { Product } from '../../types/product';

type Props = {
  product: Product;
  children?: ReactNode;
};

function ProductCard({ product, children }: Props): JSX.Element {
  const value = 1;
  const { counter, increaseBy } = useCounter(value);

  return (
    <div className={styles.productCard}>
      {children}
      {/* <ProductImage image={product.image} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} value={value} /> */}
    </div>
  );
}

function ProductImage({ image = '' }) {
  return <img src={image ? image : noImage} alt="Product Image" className={styles.productImg} />;
}

function ProductTitle({ title }: { title: string }) {
  return <span className={styles.productDescription}>{title}</span>;
}

function ProductButtons({
  counter,
  increaseBy,
  value,
}: {
  counter: number;
  increaseBy: (value: number) => void;
  value: number;
}) {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-value)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+value)}>
        +
      </button>
    </div>
  );
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;

export default ProductCard;
