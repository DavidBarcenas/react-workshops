import { CartIcon, ClearCartIcon } from './icons';
import { useCart } from '../hooks/use-cart';

export function Cart() {
  const { cart, clearCart, addToCart } = useCart();
  return (
    <>
      <input type='checkbox' id='cart' hidden className='peer/cart' />
      <label
        htmlFor='cart'
        className='peer-checked/cart:bg-emerald-400 fixed top-0 right-0 bg-blue-500 text-white p-4 z-10'
      >
        <CartIcon />
      </label>

      <aside className='fixed top-0 -right-full bg-gray-800 text-white w-96 h-screen p-4 peer-checked/cart:right-0 transition-all'>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <span>{item.title}</span>
                <strong>${item.price}</strong>
              </div>
              <button onClick={() => addToCart(item)}>
                <small>Cantidad: {item.quantity}</small>+
              </button>
            </li>
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
