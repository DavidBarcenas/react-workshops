import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './private-route';
import AdminPage from '../pages/admin';
import LoginPage from '../pages/auth/login';
import EmployeePage from '../pages/employee';

export default function AppRouter({ isAuth = false }) {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute isAuth={isAuth}>
            <AdminPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/employee"
        element={
          <PrivateRoute isAuth={isAuth}>
            <EmployeePage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
