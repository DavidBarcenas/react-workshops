import { useContext } from 'react';

import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

import type { ProductTitleProps } from '../types/product';

function ProductTitle({ title, className }: ProductTitleProps): JSX.Element {
  const { product } = useContext(ProductContext);
  const showTitle = title || product.title;

  return <span className={`${styles.productDescription} ${className}`}>{showTitle}</span>;
}

export default ProductTitle;
