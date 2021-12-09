import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import FormPage from '../../pages/Form';

const server = setupServer(
  rest.post('/products', (req, res, ctx) => {
    const STATUS_CREATED = 201;
    return res(ctx.status(STATUS_CREATED));
  })
);

beforeEach(() => render(<FormPage />));
beforeAll(() => server.listen());
afterAll(() => server.close());

describe('When form is mounted', () => {
  it('There must be a create product form page.', () => {
    expect(screen.getByRole('heading', { name: /create product/i })).toBeInTheDocument();
  });

  it('The following fields must exist: name. size, type', () => {
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/size/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/type/i)).toBeInTheDocument();
  });

  it('The type field should have the following options (electronic, furniture, clothing)', () => {
    expect(screen.queryByText(/electronic/i)).toBeInTheDocument();
    expect(screen.queryByText(/furniture/i)).toBeInTheDocument();
    expect(screen.queryByText(/clothing/i)).toBeInTheDocument();
  });

  it('Should exists the submit button', () => {
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});

describe('When the user submits the form without values', () => {
  it('Should show validation messages', async () => {
    const submitBtn = screen.getByRole('button', { name: /submit/i });

    expect(screen.queryByText(`/The name is required/i`)).not.toBeInTheDocument();
    expect(screen.queryByText(/The size is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/The type is required/i)).not.toBeInTheDocument();

    fireEvent.click(submitBtn);

    expect(screen.queryByText(/The name is required/i)).toBeInTheDocument();
    expect(screen.queryByText(/The size is required/i)).toBeInTheDocument();
    expect(screen.queryByText(/The type is required/i)).toBeInTheDocument();

    await waitFor(() => expect(submitBtn).not.toBeDisabled());
  });
});

describe('When the user blurs an empty field', () => {
  it('Should show a validation error message for the input name', () => {
    expect(screen.queryByText(/The name is required/i)).not.toBeInTheDocument();

    fireEvent.blur(screen.getByLabelText(/name/i), {
      target: { name: 'name', value: '' },
    });

    expect(screen.queryByText(/The name is required/i)).toBeInTheDocument();
  });

  it('Should show a validation error message for the input size', () => {
    expect(screen.queryByText(/The size is required/i)).not.toBeInTheDocument();

    fireEvent.blur(screen.getByLabelText(/size/i), {
      target: { name: 'size', value: '' },
    });

    expect(screen.queryByText(/The size is required/i)).toBeInTheDocument();
  });
});

describe('When the user submits the form', () => {
  it('The submit button should be disabled until the request is done', async () => {
    const submitBtn = screen.getByRole('button', { name: /submit/i });

    expect(submitBtn).not.toBeDisabled();
    fireEvent.click(submitBtn);
    expect(submitBtn).toBeDisabled();

    await waitFor(() => expect(submitBtn).not.toBeDisabled());
  });
});
