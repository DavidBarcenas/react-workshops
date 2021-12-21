import { fireEvent, render, screen } from '@testing-library/react';
import LoginPage from './login';

beforeEach(() => render(<LoginPage />));

describe('login page is mounted', () => {
  it('must display the login title', () => {
    expect(screen.getByText(/login page/i)).toBeInTheDocument();
  });

  it('must have a form with the following fields: email, password and a submit button', () => {
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });
});

describe('check the required validations of the fields when submitting the form', () => {
  const emailRequired = /the email is required/i;
  const passwordRequired = /the password is required/i;

  it('if the fields are empty, show the following message: "The [field name] is required"', () => {
    expect(screen.queryByText(emailRequired)).not.toBeInTheDocument();
    expect(screen.queryByText(passwordRequired)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /send/i }));

    expect(screen.getByText(emailRequired)).toBeInTheDocument();
    expect(screen.getByText(passwordRequired)).toBeInTheDocument();
  });

  it('if the fields are filled, it should not show the required message', () => {
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john.doe@test.com' },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'secret123' },
    });

    fireEvent.click(screen.getByRole('button', { name: /send/i }));

    expect(screen.queryByText(emailRequired)).not.toBeInTheDocument();
    expect(screen.queryByText(passwordRequired)).not.toBeInTheDocument();
  });
});

describe('an invalid email was entered and it leaves the input', () => {
  it('must display a validation message', () => {
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'invalid.email' },
    });
    fireEvent.blur(screen.getByLabelText(/email/i));

    expect(
      screen.getByText(/the email is invalid. Example: john.doe@mail.com/i),
    ).toBeInTheDocument();
  });
});
