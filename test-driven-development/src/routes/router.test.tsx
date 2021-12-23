import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router';

describe('if the user is not authenticated and wants to enter the admin page', () => {
  it('should be redirected to the login page', () => {
    window.history.pushState({}, '', '/admin');

    render(
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>,
    );

    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});

describe('if the user is not authenticated and wants to enter the employee page', () => {
  it('should be redirected to the login page', () => {
    window.history.pushState({}, '', '/employee');

    render(
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>,
    );

    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});
