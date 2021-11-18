import { Navigate, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import AuthLayout from '../layout/Auth';
import Login from '../pages/Login';
import Register from '../pages/Register';

function Navigation(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default Navigation;
