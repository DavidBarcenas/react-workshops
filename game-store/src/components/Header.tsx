import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Storecontext } from '../context/StoreContext';
import '../styles/components/header.scss';

export const Header = () => {
  const { state } = useContext(Storecontext);
  const { cart } = state;

  return (
    <header className="Header">
      <div className="Header-bar">
        <div className="container d-flex-between">
          <span>+(52) 89-58-97-23</span>
          <span>30% discount on your first order</span>
          <span>Account</span>
        </div>
      </div>

      <div className="container d-flex-between">
        <h1 className="Header-title">
          <Link to="/">Gaming Store</Link>
        </h1>

        <nav className="Header-nav">
          <Link to="/">Home</Link>
          <Link to="/">Games</Link>
          <Link to="/">Accesories</Link>
          <Link to="/">Contact</Link>
        </nav>

        <div className="Header-checkout">
          {cart.length > 0 && <div className="counter">{cart.length}</div>}
          <Link to="/checkout">
            <span className="material-icons"> shopping_cart </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
