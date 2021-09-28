import { Product } from "./Product"
import '../styles/components/products.scss'

type Props = {
  products: any[]
}

export const Products = ({ products }: Props) => {
  return (
    <div className="d-flex-between Products">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
      <div className="Product-show-all">
        <div>
          <p>Show all</p>
          <p>games</p>
        </div>
        <button>
          <span className="material-icons"> east </span>
        </button>
      </div>
    </div>
  )
}
