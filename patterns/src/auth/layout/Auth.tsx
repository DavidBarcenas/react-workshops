import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

function AuthLayout(): JSX.Element {
  return (
    <div className="auth-wrap">
      <h1>Auth Layout</h1>
      <ul className="auth-nav">
        <li>
          <NavLink end to="/auth/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink end to="/auth/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink end to="/auth/verify-account">
            Verify
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
