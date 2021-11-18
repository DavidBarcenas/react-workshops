import { Outlet } from 'react-router';
import Navigation from '../router/navigation';

function AuthLayout(): JSX.Element {
  return (
    <>
      <h1>Auth Layout</h1>
      <Outlet />
    </>
  );
}

export default AuthLayout;
