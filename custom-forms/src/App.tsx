import { NavLink, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

function App(): JSX.Element {
  return (
    <div className="container">
      <header className="header">
        <h1>Build forms with Formik</h1>
        <p>Feel free to fork this project and improve it. Give it a star!</p>
      </header>
      <aside className="navigation">
        <nav>
          <ul>
            {routes.map(({ path, name, description }) => (
              <li key={path}>
                <NavLink end to={path} className={({ isActive }) => (isActive ? 'active' : '')}>
                  <div>
                    <strong>{name}</strong>
                    <span className="description">{description}</span>
                  </div>
                  <span className="icon">✪</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="main">
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
