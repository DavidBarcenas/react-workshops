import { default as ProductCardHOC } from './ProductCard';
import ProductButtons from './ProductButtons';
import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';

import type { ProductCardCompound } from '../../types/product';

const ProductCard: ProductCardCompound = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export { ProductCard, ProductButtons, ProductImage, ProductTitle };
export default ProductCard;
