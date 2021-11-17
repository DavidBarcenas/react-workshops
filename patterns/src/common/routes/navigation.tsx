import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '../components/Layout';
import { routes } from './routes';

function Navigation(): JSX.Element {
  return (
    <Layout>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to={routes[0].path} replace />} />
      </Routes>
    </Layout>
  );
}

export default Navigation;
