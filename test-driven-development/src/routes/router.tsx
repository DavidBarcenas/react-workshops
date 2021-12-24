import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './private-route';
import AdminPage from '../pages/admin';
import LoginPage from '../pages/auth/login';
import EmployeePage from '../pages/employee';

export default function AppRouter({ isAuth = false }) {
  const [isUserAuth, setIsUserAuth] = useState(isAuth);

  function handleSuccessLogin() {
    setIsUserAuth(true);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<LoginPage onSuccessLogin={handleSuccessLogin} />}
      />
      <Route
        path="/admin"
        element={
          <PrivateRoute isAuth={isUserAuth}>
            <AdminPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/employee"
        element={
          <PrivateRoute isAuth={isUserAuth}>
            <EmployeePage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
