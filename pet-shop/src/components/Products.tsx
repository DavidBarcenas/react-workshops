import { Product } from "./Product"

type Props = {
  products: any[]
}

export const Products = ({ products }: Props) => {
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
