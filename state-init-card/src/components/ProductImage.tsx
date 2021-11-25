import { useContext } from 'react';

import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

import type { ProductImageProps } from '../types/product';

function ProductImage({ img, className }: ProductImageProps): JSX.Element {
  const { product } = useContext(ProductContext);
  const image = img || product.image || noImage;

  return <img src={image} alt={product.title} className={`${styles.productImg} ${className}`} />;
}

export default ProductImage;
