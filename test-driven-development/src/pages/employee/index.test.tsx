import { render, screen } from '@testing-library/react';
import AuthProvider from '../../state/auth-context';
import EmployeePage from './index';

describe('when the admin access to employee page', () => {
  render(
    <AuthProvider user={{ username: 'daveepro', role: 'admin' }}>
      <EmployeePage />
    </AuthProvider>,
  );

  it('must have access to delete the employe button', () => {
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });
});

describe('when the employee access to employee page', () => {
  render(
    <AuthProvider user={{ username: 'daveepro', role: 'employee' }}>
      <EmployeePage />
    </AuthProvider>,
  );

  it('must not have access to delete the employe button', () => {
    expect(
      screen.queryByRole('button', { name: /delete/i }),
    ).not.toBeInTheDocument();
  });
});
