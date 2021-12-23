import { Routes, Route, Navigate } from 'react-router-dom';
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
        element={isAuth ? <AdminPage /> : <Navigate to="/" />}
      />
      <Route
        path="/employee"
        element={isAuth ? <EmployeePage /> : <Navigate to="/" />}
      />
    </Routes>
  );
}
