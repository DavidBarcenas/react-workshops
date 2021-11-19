import { createContext, ReactNode, useContext } from 'react';

import useCounter from '../hooks/useCounter';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

import type { Product } from '../../types/product';

type Props = {
  product: Product;
  children?: ReactNode;
};

type ProductContextProps = {
  counter: number;
  increaseValue: number;
  increaseBy: (value: number) => void;
  product: Product;
};

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

function ProductCard({ product, children }: Props): JSX.Element {
  const increaseValue = 1;
  const { counter, increaseBy } = useCounter(increaseValue);

  return (
    <Provider value={{ counter, increaseBy, product, increaseValue }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
}

function ProductImage({ img = '' }) {
  const { product } = useContext(ProductContext);
  const image = img || product.image || noImage;

  return <img src={image} alt={product.title} className={styles.productImg} />;
}

function ProductTitle({ title = '' }) {
  const { product } = useContext(ProductContext);
  const showTitle = title || product.title;

  return <span className={styles.productDescription}>{showTitle}</span>;
}

function ProductButtons() {
  const { increaseBy, counter, increaseValue } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-increaseValue)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+increaseValue)}>
        +
      </button>
    </div>
  );
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;

export default ProductCard;
