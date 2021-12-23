import { screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import AppRouter from './router';
import { handlerLogin } from '../__fixtures__/handler';
import {
  fillInputValues,
  renderWithRouter,
  submitForm,
} from '../__fixtures__/utils';

const server = setupServer(...handlerLogin);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

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

describe('if the user is authenticated and to enter the admin page', () => {
  it('should be render admin page', () => {
    renderWithRouter(<AppRouter isAuth />, { route: '/admin' });
    expect(screen.getByText(/admin page/i)).toBeInTheDocument();
  });
});

describe('when the admin is atuhenticated in login page', () => {
  it('should be redirected to admin page', async () => {
    renderWithRouter(<AppRouter />);
    fillInputValues();
    submitForm();
    expect(await screen.findByText(/admin page/i)).toBeInTheDocument();
  });
});
