import { NavLink, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

function App(): JSX.Element {
  return (
    <div className="container">
      <header>
        <h1>Build forms with Formik</h1>
        <p>Feel free to fork this project and improve it. Give it a star!</p>
      </header>
      <aside>
        <nav>
          <ul>
            {routes.map(({ path, name, description }) => (
              <li key={path}>
                <NavLink end to={path}>
                  <div>
                    <strong>{name}</strong>
                    <span>{description}</span>
                  </div>
                  <span>icon</span>
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
    </div>
  );
}

export default App;
