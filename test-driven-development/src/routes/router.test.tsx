import { screen } from '@testing-library/react';
import { renderWithRouter } from '../__fixtures__/utils';
import AppRouter from './router';

describe('if the user is not authenticated and wants to enter the admin page', () => {
  it('should be redirected to the login page', () => {
    renderWithRouter(<AppRouter />, { route: '/admin' });
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});

describe('if the user is not authenticated and wants to enter the employee page', () => {
  it('should be redirected to the login page', () => {
    renderWithRouter(<AppRouter />, { route: '/employee' });
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});
