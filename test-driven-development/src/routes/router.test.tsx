import { screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import AppRouter from './router';
import { handlerLogin } from '../__fixtures__/handler';
import {
  fillInputValues,
  goTo,
  renderWithAuthProvider,
  submitForm,
} from '../__fixtures__/utils';

const server = setupServer(...handlerLogin);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('if the user is not authenticated and wants to enter the admin page', () => {
  it('should be redirected to the login page', () => {
    goTo('/admin');
    renderWithAuthProvider(<AppRouter />);
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});

describe('if the user is not authenticated and wants to enter the employee page', () => {
  it('should be redirected to the login page', () => {
    goTo('/employee');
    renderWithAuthProvider(<AppRouter />);
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});

describe('if the user is authenticated and to enter the admin page', () => {
  it('should be render admin page', () => {
    goTo('/admin');
    renderWithAuthProvider(<AppRouter />, true);
    expect(screen.getByText(/admin page/i)).toBeInTheDocument();
  });
});

describe('when the admin is atuhenticated in login page', () => {
  it('should be redirected to admin page', async () => {
    goTo('/admin');
    renderWithAuthProvider(<AppRouter />);
    fillInputValues('admin@mail.com');
    submitForm();
    expect(await screen.findByText(/admin page/i)).toBeInTheDocument();
  });
});
