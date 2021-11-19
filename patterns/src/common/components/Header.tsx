import { NavLink } from 'react-router-dom';

import { routes } from '../routes/routes';
import logo from '../../logo.svg';

function Header(): JSX.Element {
  function isActive({ isActive }: { isActive: boolean }): string {
    return isActive ? 'nav-active ' : '';
  }

  return (
    <header>
      <nav>
        <img src={logo} alt="React Logo" />
        <ul>
          {routes.map(({ path, name }) => (
            <li key={path}>
              <NavLink end to={path} className={isActive}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
