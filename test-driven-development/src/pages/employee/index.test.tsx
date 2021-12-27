import { render, screen } from '@testing-library/react';
import { ADMIN_ROLE, EMPLOYEE_ROLE } from '../../consts/messages';
import AuthProvider from '../../state/auth-context';
import EmployeePage from './index';

function renderWith(role: string, username = 'daveepro') {
  return render(
    <AuthProvider user={{ username, role }}>
      <EmployeePage />
    </AuthProvider>,
  );
}

describe('when the admin access to employee page', () => {
  renderWith(ADMIN_ROLE);

  it('must have access to delete the employe button', () => {
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });
});

describe('when the employee access to employee page', () => {
  it('must not have access to delete the employe button', () => {
    renderWith(EMPLOYEE_ROLE);
    expect(
      screen.queryByRole('button', { name: /delete/i }),
    ).not.toBeInTheDocument();
  });

  it('the employee username should be displayed on the navbar', () => {
    renderWith(EMPLOYEE_ROLE, 'Max Rodes');
    expect(screen.getByText(/max rodes/i)).toBeInTheDocument();
  });
});
