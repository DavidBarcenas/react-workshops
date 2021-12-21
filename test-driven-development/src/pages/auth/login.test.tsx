import {fireEvent, render, screen} from '@testing-library/react';
import LoginPage from './login';

beforeEach(() => render(<LoginPage/>));

describe('login page is mounted', () => {
  it('must display the login title', () => {
    expect(screen.getByText(/login page/i)).toBeInTheDocument();
  });

  it('must have a form with the following fields: email, password and a submit button', () => {
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /send/i})).toBeInTheDocument();
  });
});

describe('if the fields are empty and the form is submitted', () => {
  it('display required messages as the format: "The [field name] is required"', () => {
    const emailRequired = /the email is required/i;
    const passwordRequired = /the password is required/i;

    expect(screen.queryByText(emailRequired)).not.toBeInTheDocument();
    expect(screen.queryByText(passwordRequired)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', {name: /send/i}));

    expect(screen.getByText(emailRequired)).toBeInTheDocument();
    expect(screen.getByText(passwordRequired)).toBeInTheDocument();
  });
});

describe('if the fields are filled and the form is submitted', () => {
  it('must no display required message', () => {
    const emailRequired = /the email is required/i;
    const passwordRequired = /the password is required/i;

    (screen.getByLabelText(/email/i) as HTMLInputElement).value = 'john.doe@test.com';
    (screen.getByLabelText(/password/i) as HTMLInputElement).value = 'secret123';

    fireEvent.click(screen.getByRole('button', {name: /send/i}));

    expect(screen.queryByText(emailRequired)).not.toBeInTheDocument();
    expect(screen.queryByText(passwordRequired)).not.toBeInTheDocument();
  });
});
