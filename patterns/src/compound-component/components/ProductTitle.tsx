import { useContext } from 'react';

import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

type Props = {
  title?: string;
};

function ProductTitle({ title }: Props): JSX.Element {
  const { product } = useContext(ProductContext);
  const showTitle = title || product.title;

  return <span className={styles.productDescription}>{showTitle}</span>;
}

export default ProductTitle;
