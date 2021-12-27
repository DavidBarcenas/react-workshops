import { screen } from '@testing-library/react';

import AdminPage from './index';
import AuthProvider from '../../state/auth-context';
import { renderWithAuthProvider } from '../../__fixtures__/utils';

describe('when the admin page is mounted', () => {
  renderWithAuthProvider(
    <AuthProvider user={{ username: 'daveepro' }}>
      <AdminPage />
    </AuthProvider>,
  );

  it('must display the admin username', () => {
    expect(screen.getByText(/daveepro/i)).toBeInTheDocument();
  });
});
