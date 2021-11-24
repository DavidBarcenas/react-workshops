import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import useShoppingCart from '../hooks/useShoppingCart';
import { products } from '../data/products';

const NO_PRODUCT = 0;

function ShoppingPage(): JSX.Element {
  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>State Initializer</h1>
      <hr />

      <ProductCard
        product={products[0]}
        value={shoppingCart[products[0].id]?.count || NO_PRODUCT}
        onChange={onProductCountChange}>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </ProductCard>
    </div>
  );
}

export default ShoppingPage;
