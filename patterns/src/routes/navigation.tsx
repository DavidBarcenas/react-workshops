import { Routes, Route, NavLink } from "react-router-dom";
import logo from '../logo.svg'

function Navigation() {
  return (
    <>
     <div className="main-layout">
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
    <Routes>
     

          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
    </Routes>
      </div>
    </>
  );
}

export default Navigation