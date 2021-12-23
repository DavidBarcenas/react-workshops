import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

export function renderWithRouter(ui: JSX.Element, { route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

export function fillInputValues(email = 'john.doe@test.com', password = 'Secret12*') {
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: email },
  });

  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: password },
  });
}

export const submitForm = () => fireEvent.click(screen.getByRole('button', { name: /send/i }));