import { Products } from './components/products';
import { Header } from './components/header';
import { FiltersProvider } from './context/filters-provider';
import { Cart } from './components/cart';
import { CartProvider } from './context/cart-provider';

export function ShoppingCart() {
  return (
    <FiltersProvider>
      <CartProvider>
        <div className='bg-gray-100 p-4'>
          <Header />
          <Cart />
          <Products />
        </div>
      </CartProvider>
    </FiltersProvider>
  );
}
