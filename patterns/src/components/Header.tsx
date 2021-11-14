import { NavLink } from "react-router-dom";
import logo from '../logo.svg'

function Header() {
  return (
   <header>
      <nav>
      <img src={logo} alt="React Logo" />
      <ul>
        <li>
          <NavLink  end to="/" className={({ isActive }) => isActive ? "nav-active " : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink end to="/about" className={({ isActive }) => isActive ? "nav-active " : ""}>About</NavLink>
        </li>
        <li>
          <NavLink end to="/users" className={({ isActive }) => isActive ? "nav-active " : ""}>Users</NavLink>
        </li>
      </ul>
      </nav>
   </header>
  );
}

export default Header;