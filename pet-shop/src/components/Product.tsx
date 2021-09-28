import '../styles/components/products.scss'

type Props = {
  product: any
}

export const Product = ({ product }: Props) => {
  return (
    <div className="Product-item">
      <img src={product.image} alt={product.title} />
      <div className="Product-item-detail">
        <h3>{product.title}</h3>
      </div>
      <div className="d-flex-between Product-item-footer">
        <p>${product.price}</p>
        <div className="Product-item-cta">
          <button type="button">
            <span className="material-icons"> favorite_border </span>
          </button>
          <button type="button">
            <span className="material-icons"> add </span>
          </button>
          <button type="button">
            <span className="material-icons"> shopping_cart </span>
          </button>
        </div>
      </div>
    </div>
  )
}
