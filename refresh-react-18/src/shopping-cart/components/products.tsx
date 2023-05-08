import { AddToCartIcon, RemoveFromCartIcon } from './icons';
import { useState } from 'react';
import { useFilters } from '../hooks/use-filters';
import { products as productsMock } from '../mocks/products.json';
import { useCart } from '../hooks/use-cart';
import { Product } from '../interfaces/product';

export function Products() {
  const [products] = useState(productsMock);
  const { filterProducts } = useFilters();
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product: Product) => {
    return cart.some((cartProduct) => cartProduct.id === product.id);
  };

  const filteredProducts = filterProducts(products);

  return (
    <main>
      <ul className='grid grid-cols-5 gap-5 auto-rows-max'>
        {filteredProducts.map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id} className='bg-white rounded-sm pb-4'>
              <img
                src={product.thumbnail}
                alt={product.title}
                className='w-full h-[150px] object-cover'
              />
              <div className='p-4 flex items-center justify-between'>
                <strong>{product.title}</strong>
                <span>${product.price}</span>
              </div>
              <button
                className='flex items-center justify-center gap-3 bg-black text-white rounded-md px-4 py-1.5 text-sm m-auto'
                onClick={() => {
                  isProductInCart ? removeFromCart(product) : addToCart(product);
                }}
              >
                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
