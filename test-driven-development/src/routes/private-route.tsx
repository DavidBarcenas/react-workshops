import { Navigate, useLocation } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
  isAuth: boolean;
};

export default function PrivateRoute({ children, isAuth }: PrivateRouteProps) {
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}
