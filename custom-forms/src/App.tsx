import { NavLink, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

function App(): JSX.Element {
  return (
    <>
      <aside>
        <nav>
          <ul>
            {routes.map(({ path, name }) => (
              <li key={path}>
                <NavLink end to={path}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </main>
    </>
  );
}

export default App;
