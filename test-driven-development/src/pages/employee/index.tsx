import { useContext } from 'react';
import { ADMIN_ROLE } from '../../consts/messages';
import { AuthContext } from '../../state/auth-context';

export default function EmployeePage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1>Employee Page</h1>
      {user.role === ADMIN_ROLE && <button>Delete</button>}
    </>
  );
}
