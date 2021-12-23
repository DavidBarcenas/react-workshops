import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AdminPage from '../pages/admin';
import LoginPage from '../pages/auth/login';
import EmployeePage from '../pages/employee';

const isAuth = false;

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/employee"
        element={
          <PrivateRoute>
            <EmployeePage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

function PrivateRoute({ children }: { children: JSX.Element }) {
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}
