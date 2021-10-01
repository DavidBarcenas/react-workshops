import { useContext } from 'react';

import { Storecontext } from '../context/StoreContext';
import { ProductItem } from './ProductItem';
import type { Product } from '../types/product';
import '../styles/components/products.scss';

export const Products = () => {
  const { state, addToCart } = useContext(Storecontext);
  const { products } = state;

  const handleAddToCart = (p: Product) => {
    addToCart(p);
  };

  return (
    <div className="d-flex-between Products">
      {products.map((p: Product) => (
        <ProductItem key={p.id} product={p} handleAddToCart={handleAddToCart} />
      ))}

      <div className="Product-show-all">
        <div>
          <p>Show all</p>
          <p>games</p>
        </div>
        <button>
          <span className="material-icons">east</span>
        </button>
      </div>
    </div>
  );
};
