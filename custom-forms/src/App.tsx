import { Outlet } from 'react-router';
import Router from './routes/Router';

function App(): JSX.Element {
  return (
    <>
      <aside>
        <h1>Aside</h1>
      </aside>
      <main>
        <h1>Main</h1>
        <Outlet />
      </main>
      <Router />
    </>
  );
}

export default App;
