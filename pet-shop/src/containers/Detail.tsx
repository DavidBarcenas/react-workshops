import { useContext, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Storecontext } from '../context/StoreContext';
import '../styles/containers/detail.scss';

export const Detail = (): JSX.Element => {
  const { state, addToBuyer } = useContext(Storecontext);
  const form = useRef<HTMLFormElement | null>(null);
  const history = useHistory();
  const { cart } = state;

  const handleSubmit = () => {
    if (form.current) {
      const formData = new FormData(form.current);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const buyer: any = {};
      formData.forEach((value, key) => (buyer[key] = value));

      addToBuyer(buyer);
      history.push('/success');
    }
  };

  return (
    <div className="Detail">
      <div className="container">
        <div className="Breadcrumbs">
          <span>Home / Checkout / Detail</span>
        </div>

        <div className="d-flex-between Detail-wrapper">
          <div className="Detail-content">
            <h2 className="container-title">Contact Information</h2>

            <div className="Detail-form">
              <form ref={form}>
                <input type="text" name="name" placeholder="Full Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="address" placeholder="Address" />
                <input type="text" name="apto" placeholder="Apto." />
                <input type="text" name="city" placeholder="City" />
                <input type="text" name="country" placeholder="Country" />
                <input type="text" name="state" placeholder="State" />
                <input type="text" name="zip" placeholder="Zip" />
                <input type="text" name="phone" placeholder="Phone" />
              </form>
            </div>

            <div className="Detail-buttons">
              <button type="button" className="btn" onClick={handleSubmit}>
                Proceed to pay
              </button>
              <Link to="/checkout">
                <button type="button" className="btn">
                  Return to cart
                </button>
              </Link>
            </div>
          </div>
          <div className="Detail-sidebar">
            <h2 className="container-title">Continue payment</h2>

            {cart.map(p => (
              <div key={p.id} className="d-flex-between Detail-item">
                <div className="counter">1</div>
                <div>
                  <img src={p.image} alt={p.title} />
                  <h3>{p.title}</h3>
                </div>
                <span>${p.price}</span>
              </div>
            ))}

            <div className="Detail-sidebar-total">
              <div className="d-flex-between">
                <p>Subtotal</p>
                <span>$120</span>
              </div>
              <div className="d-flex-between">
                <p>Shipping</p>
                <span>$20</span>
              </div>
              <div className="d-flex-between total">
                <p>Total</p>
                <div>
                  <span className="total-currency">USD</span>
                  <span className="total-price">$120</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
