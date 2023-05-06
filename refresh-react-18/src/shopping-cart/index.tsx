import { Products } from './components/products';
import { products } from './mocks/products.json';

export function ShoppingCart() {
  return (
    <div className='bg-gray-100 p-4'>
      <h1 className='my-4 text-2xl font-bold'>Carrito de compras</h1>
      <Products list={products} />
    </div>
  );
}
