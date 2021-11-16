import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

type link = {
  path: string;
  name: string;
};

const LINKS: link[] = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/users', name: 'Users' },
];

function Header(): JSX.Element {
  function isActive({ isActive }: { isActive: boolean }): string {
    return isActive ? 'nav-active ' : '';
  }

  return (
    <header>
      <nav>
        <img src={logo} alt="React Logo" />
        <ul>
          {LINKS.map(link => (
            <li key={link.name}>
              <NavLink end to={link.path} className={isActive}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
