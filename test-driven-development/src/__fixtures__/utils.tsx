import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../state/auth-context';

export function renderWithRouter(ui: JSX.Element, { route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
}

export function renderWithAuthProvider(ui: JSX.Element, isAuth = false) {
  return render(<AuthProvider isAuth={isAuth}>{ui}</AuthProvider>, {
    wrapper: BrowserRouter,
  });
}

export const goTo = (route: string) =>
  window.history.pushState({}, 'Test page', route);

export const submitForm = () =>
  fireEvent.click(screen.getByRole('button', { name: /send/i }));

export function fillInputValues(
  email = 'john.doe@test.com',
  password = 'Secret12*',
) {
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: email },
  });

  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: password },
  });
}
