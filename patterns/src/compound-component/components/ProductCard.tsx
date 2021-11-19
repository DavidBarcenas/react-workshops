import { createContext } from 'react';

import ProductButtons from './ProductButtons';
import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';
import useCounter from '../hooks/useCounter';
import styles from '../styles/styles.module.css';

import type { ProductContextProps, ProductCardProps } from '../../types/product';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

function ProductCard({ product, children }: ProductCardProps): JSX.Element {
  const increaseValue = 1;
  const { counter, increaseBy } = useCounter(increaseValue);

  return (
    <Provider value={{ counter, increaseBy, product, increaseValue }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;

export default ProductCard;
