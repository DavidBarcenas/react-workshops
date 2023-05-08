import { Products } from './components/products';
import { Header } from './components/header';
import { FiltersProvider } from './context/filters-provider';

export function ShoppingCart() {
  return (
    <FiltersProvider>
      <div className='bg-gray-100 p-4'>
        <Header />
        <Products />
      </div>
    </FiltersProvider>
  );
}
