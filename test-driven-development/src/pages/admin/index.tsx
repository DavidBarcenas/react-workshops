import { useContext } from 'react';
import { AuthContext } from '../../state/auth-context';

export default function AdminPage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <header>
        <h1>Admin Page</h1>
        <p>{user.username}</p>
      </header>
    </>
  );
}
