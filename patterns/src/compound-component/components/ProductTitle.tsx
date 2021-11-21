import { useContext } from 'react';

import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

type Props = {
  className?: string;
  title?: string;
};

function ProductTitle({ title, className }: Props): JSX.Element {
  const { product } = useContext(ProductContext);
  const showTitle = title || product.title;

  return <span className={`${styles.productDescription} ${className}`}>{showTitle}</span>;
}

export default ProductTitle;
