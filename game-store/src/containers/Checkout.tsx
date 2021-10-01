import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Storecontext } from '../context/StoreContext';
import type { Product } from '../types/product';
import '../styles/containers/checkout.scss';

export const Checkout = (): JSX.Element => {
  const { state, removeFromCart } = useContext(Storecontext);
  const { cart } = state;
  const initialCounter = 0;

  const handleSumTotal = (): number => {
    const sum = cart.reduce(reducer, initialCounter);
    return sum;
  };

  const reducer = (acc: number, curr: Product): number => {
    return acc + curr.price;
  };

  return (
    <div className="Checkout">
      <div className="container">
        <div className="Breadcrumbs">
          <span>Home / Your Shopping Cart</span>
        </div>

        <h2 className="container-title">Your Shopping Cart</h2>

        <div className="d-flex-between Checkout-wrapper">
          <div className="Checkout-content">
            {cart.map(p => (
              <div key={p.id} className="d-flex-between Checkout-item">
                <div className="Checkout-img">
                  <img src={p.image} alt={p.title} />
                  <div>
                    <h3>{p.title}</h3>
                    <span>${p.price}</span>
                  </div>
                </div>

                <div className="Checkout-quantity">
                  <span>Quantity</span>
                  <input type="text" />
                </div>

                <div className="Checkout-price">
                  <span className="price">${p.price}</span>
                  <button type="button" onClick={() => removeFromCart(p.id)}>
                    <span className="material-icons"> delete_outline </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="Checkout-sidebar">
            <div className="Checkout-orders">
              <h3>Order list</h3>
              <p>Total {cart.length} item(s)</p>
              <p>
                Total price <span>${handleSumTotal()}</span>
              </p>
              {cart.length > initialCounter && (
                <button type="button" className="btn">
                  <Link to="/checkout/detail" aria-disabled>
                    Proceed to checkout
                  </Link>
                </button>
              )}
            </div>

            <div className="Checkout-note">
              <p> At the moment we only process orders in dollars. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
