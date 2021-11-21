import { createContext } from 'react';

import useCounter from '../hooks/useCounter';
import styles from '../styles/styles.module.css';

import type { ProductContextProps, ProductCardProps } from '../../types/product';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

function ProductCard({ product, children, className }: ProductCardProps): JSX.Element {
  const increaseValue = 1;
  const { counter, increaseBy } = useCounter(increaseValue);

  return (
    <Provider value={{ counter, increaseBy, product, increaseValue }}>
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
}

export default ProductCard;
