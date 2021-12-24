import { render, screen } from '@testing-library/react';
import AuthProvider from '../../state/auth-context';
import AdminPage from './index';

describe('when the admin page is mounted', () => {
  render(
    <AuthProvider user={{ username: 'daveepro' }}>
      <AdminPage />
    </AuthProvider>,
  );

  it('must display the admin username', () => {
    expect(screen.getByText(/daveepro/i)).toBeInTheDocument();
  });
});
