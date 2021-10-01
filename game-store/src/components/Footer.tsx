import { Link } from 'react-router-dom'
import '../styles/components/footer.scss'

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container d-flex-between">
        <div className="Footer-nav">
          <Link to='/'>Games</Link>
          <Link to='/'>Consoles</Link>
          <Link to='/'>Accesories</Link>
          <Link to='/'>Subscriptions</Link>
          <Link to='/'>Promotions</Link>
        </div>

        <div className="Footer-account">
          <h3>Your Account</h3>
          <Link to='/'>Personal info</Link>
          <Link to='/'>Addresses</Link>
          <Link to='/'>Credits</Link>
          <Link to='/'>Orders</Link>
        </div>

        <div className="Footer-info">
          <h3>About us</h3>
          <p>Monday to Friday</p>
          <p>11 am - 8:30 pm</p>
          <p>+(52) 89-58-97-23</p>
          <p>g_store@mail.com</p>
        </div>
      </div>
      <div className="Footer-copy">
        <div className="container d-flex-between">
          <p>© 2021. Powered by David Bárcenas</p>
          <p>Images from pexels.com</p>
        </div>
      </div>
    </footer>
  )
}
