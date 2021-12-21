import { fireEvent, render, screen } from '@testing-library/react';
import LoginPage from './login';
import {
  INVALID_EMAIL_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
} from '../../consts/messages';

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
  it('it should show the message when the email is invalid and delete it when it is valid', () => {
    const emailField = screen.getByLabelText(/email/i);
    const inputBlur = () => fireEvent.blur(emailField);

    fireEvent.change(emailField, { target: { value: 'invalid.email' } });
    inputBlur();

    expect(screen.getByText(INVALID_EMAIL_MESSAGE)).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: 'john.doe@test.com' } });
    inputBlur();

    expect(screen.queryByText(INVALID_EMAIL_MESSAGE)).not.toBeInTheDocument();
  });
});

describe('the password input should contain at least: 8 characters, one upper case letter, one number and one special character', () => {
  it('show message if password value does not have at least 8 characters', () => {
    validatePasswordValue('secret');
  });

  it('show message if password value does not have a capital letter', () => {
    validatePasswordValue('secret12');
  });

  it('show message if password value does not have a number', () => {
    validatePasswordValue('my_Secret');
  });

  it('show message if password value does not have a special character', () => {
    validatePasswordValue('my_Secret1');
  });

  function validatePasswordValue(value: string) {
    const passwordField = screen.getByLabelText(/password/i);

    fireEvent.change(passwordField, { target: { value } });
    fireEvent.blur(passwordField);

    expect(screen.getByText(INVALID_PASSWORD_MESSAGE)).toBeInTheDocument();
  }
});
