import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">Gaming Store</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          Checkout
        </Link>
      </div>
      <span className="material-icons">home</span>
      <span className="material-icons-outlined">search</span>
      <span className="material-icons-round">
home
</span>
    </header>
  )
}
