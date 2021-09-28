import { Link } from 'react-router-dom';
import '../styles/containers/detail.scss'

export const Detail = () => {
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
              <form>
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
              <Link to="/success">
                <button type="button" className="btn">Proceed to pay</button>
              </Link>
              <Link to="/checkout">
                <button type="button" className="btn">Return to cart</button>
              </Link>
            </div>
          </div>
          <div className="Detail-sidebar">
            <h2 className="container-title">Continue payment</h2>
            
            <div className="d-flex-between Detail-item">
              <div className="counter">1</div>
              <div>
                <img src='https://image.api.playstation.com/vulcan/img/rnd/202106/0915/yhB6VOtVuKMcvzI25vsaCmIy.png' alt="Battlefield" />
                <h3>Battlefield 2042</h3>
              </div>
              <span>$120</span>
            </div>

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
  )
}
