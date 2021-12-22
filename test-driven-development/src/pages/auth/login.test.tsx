import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import LoginPage from './login';
import {
  handlerInvalidCredentials,
  handlerLogin,
} from '../../__fixtures__/handler';
import {
  INVALID_EMAIL_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
} from '../../consts/messages';
import { ERROR_SERVER_STATUS } from '../../consts/httpStatus';

const server = setupServer(...handlerLogin);
const submitBtn = () => screen.getByRole('button', { name: /send/i });

function fillInputValues(email = 'john.doe@test.com', password = 'Secret12*') {
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: email },
  });

  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: password },
  });
}

beforeEach(() => render(<LoginPage />));

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

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

  it('if the fields are empty, show the following message: "The [field name] is required"', async () => {
    expect(screen.queryByText(emailRequired)).not.toBeInTheDocument();
    expect(screen.queryByText(passwordRequired)).not.toBeInTheDocument();

    fireEvent.click(submitBtn());

    expect(screen.getByText(emailRequired)).toBeInTheDocument();
    expect(screen.getByText(passwordRequired)).toBeInTheDocument();

    await waitFor(() => expect(submitBtn()).not.toBeDisabled());
  });

  it('if the fields are filled, it should not show the required message', () => {
    fillInputValues();
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
    setInvalidPassword('secret');
  });

  it('show message if password value does not have a capital letter', () => {
    setInvalidPassword('secret12');
  });

  it('show message if password value does not have a number', () => {
    setInvalidPassword('my_Secret');
  });

  it('show message if password value does not have a special character', () => {
    setInvalidPassword('my_Secret1');
  });

  it('it should not display an error message if the password is valid', () => {
    setInvalidPassword('secret');
    fillPassword('Secret123*');
    expect(
      screen.queryByText(INVALID_PASSWORD_MESSAGE),
    ).not.toBeInTheDocument();
  });

  function setInvalidPassword(value: string) {
    fillPassword(value);
    expect(screen.getByText(INVALID_PASSWORD_MESSAGE)).toBeInTheDocument();
  }

  function fillPassword(value: string) {
    const passwordField = screen.getByLabelText(/password/i);

    fireEvent.change(passwordField, { target: { value } });
    fireEvent.blur(passwordField);
  }
});

describe('when the form is submitted with valid data', () => {
  it('must disable submit button while fetching data', async () => {
    fillInputValues();

    fireEvent.click(submitBtn());
    expect(submitBtn()).toBeDisabled();

    await waitFor(() => expect(submitBtn()).not.toBeDisabled());
  });

  it('must be a loading indicator while it is fetching', async () => {
    expect(screen.queryByTestId('loading-indicator')).not.toBeInTheDocument();

    fillInputValues();
    fireEvent.click(submitBtn());

    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId('loading-indicator'),
    );
  });
});

describe('when login form is submitted and there is an unexpected error', () => {
  it('should show the error message that the API sends', async () => {
    const message = 'Unexpected error, please try again';

    server.use(
      rest.post('/login', (req, res, ctx) =>
        res(ctx.status(ERROR_SERVER_STATUS), ctx.json({ message })),
      ),
    );

    expect(screen.queryByText(message)).not.toBeInTheDocument();

    fillInputValues();
    fireEvent.click(submitBtn());

    expect(await screen.findByText(message)).toBeInTheDocument();
  });
});

describe('when the login form is valid and submitted, but the credentials are not valid', () => {
  it('should show the error message: "The email or password are not correct"', async () => {
    const message = 'The email or password are not correct';
    const fakeEmail = 'wrong@mail.com';
    const fakePassword = 'Secret12*';

    server.use(handlerInvalidCredentials(fakeEmail, fakePassword, message));

    expect(await screen.queryByText(message)).not.toBeInTheDocument();

    fillInputValues(fakeEmail, fakePassword);
    fireEvent.click(submitBtn());

    expect(await screen.findByText(message)).toBeInTheDocument();
  });
});
