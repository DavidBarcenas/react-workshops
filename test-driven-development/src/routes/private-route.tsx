import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../state/auth-context';

type PrivateRouteProps = {
  children: JSX.Element;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuth } = useContext(AuthContext);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}
