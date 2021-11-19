import { useContext } from 'react';

import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

type Props = {
  img?: string;
};

function ProductImage({ img }: Props): JSX.Element {
  const { product } = useContext(ProductContext);
  const image = img || product.image || noImage;

  return <img src={image} alt={product.title} className={styles.productImg} />;
}

export default ProductImage;
