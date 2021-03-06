import { createContext } from 'react';

import useCounter from '../hooks/useCounter';
import styles from '../styles/styles.module.css';

import type { ProductContextProps, ProductCardStateInit } from '../../types/product';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

function ProductCard({
  product,
  children,
  className,
  onChange,
  value,
  initialValues,
}: ProductCardStateInit): JSX.Element {
  const increaseValue = 1;
  const { counter, increaseBy, isMaxCountReached, reset } = useCounter({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{ counter, increaseBy, product, increaseValue, maxCount: initialValues?.maxCount }}>
      <div className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          isMaxCountReached,
          reset,
          product,
          increaseBy,
        })}
      </div>
    </Provider>
  );
}

export default ProductCard;
