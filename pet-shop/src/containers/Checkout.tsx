import { Link } from 'react-router-dom';
import '../styles/containers/checkout.scss'

export const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="container">
        <div className="Breadcrumbs">
          <span>Home / Your Shopping Cart</span>
        </div>

        <h2 className="container-title">Your Shopping Cart</h2>

        <div className="d-flex-between Checkout-wrapper">
          <div className="Checkout-content">
            <div className="d-flex-between Checkout-item">
              <div className="Checkout-img">
                <img src='https://image.api.playstation.com/vulcan/img/rnd/202106/0915/yhB6VOtVuKMcvzI25vsaCmIy.png' alt="Battlefield" />
                <div>
                  <h3>Battlefield 2042</h3>
                  <span>$120</span>
                </div>
              </div>
                
              <div className="Checkout-quantity">
                <span>Quantity</span>
                <input type="text" />
              </div>

              <div className="Checkout-price">
                <span className="price">$120</span>
                <button type="button">
                  <span className="material-icons"> delete_outline </span>
                </button>
              </div>
            </div>
          </div>

          <div className="Checkout-sidebar">
            <div className="Checkout-orders">
              <h3>Order list</h3>
              <p>Total 1 item(s)</p>
              <p> Total price <span>$38.00</span></p>
              <Link to="/checkout/detail">
                <button type="button" className="btn">Proceed to checkout</button>
              </Link>
            </div>

            <div className="Checkout-note">
              <p> At the moment we only process orders in dollars. </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
