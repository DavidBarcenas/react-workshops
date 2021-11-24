import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';

const INITIAL_PRODUCT_COUNTER = 4;
const MAX_PRODUCT_COUNTER = 5;

function ShoppingPage(): JSX.Element {
  return (
    <div>
      <h1>State Initializer</h1>
      <hr />

      <ProductCard
        product={products[0]}
        initialValues={{
          count: INITIAL_PRODUCT_COUNTER,
          maxCount: MAX_PRODUCT_COUNTER,
        }}>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </ProductCard>
    </div>
  );
}

export default ShoppingPage;
