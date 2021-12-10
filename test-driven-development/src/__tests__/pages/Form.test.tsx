import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  CREATED_STATUS,
  ERROR_SERVER_STATUS,
  INVALID_REQUEST_STATUS,
} from '../../consts/httpStatus';
import FormPage from '../../pages/Form';

type Product = {
  name: string;
  size: string;
  type: string;
};

const server = setupServer(
  rest.post<Product>('/products', (req, res, ctx) => {
    const { name, size, type } = req.body;

    if (name && size && type) {
      return res(ctx.status(CREATED_STATUS));
    }

    return res(ctx.status(ERROR_SERVER_STATUS));
  })
);

beforeEach(() => render(<FormPage />));
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

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

describe('When the user submits the form properly and he server returns created status', () => {
  it('The submit button should be disabled until the request is done', async () => {
    const submitBtn = screen.getByRole('button', { name: /submit/i });
    expect(submitBtn).not.toBeDisabled();

    fireEvent.click(submitBtn);

    expect(submitBtn).toBeDisabled();
    await waitFor(() => expect(submitBtn).not.toBeDisabled());
  });

  it('The form page must display the success message “Product stored” and clean the fields values', async () => {
    const nameInput = screen.getByLabelText(/name/i);
    const sizeInput = screen.getByLabelText(/size/i);
    const typeSelect = screen.getByLabelText(/type/i);

    fireEvent.change(nameInput, {
      target: { name: 'name', value: 'my product' },
    });
    fireEvent.change(sizeInput, {
      target: { name: 'size', value: '10' },
    });
    fireEvent.change(typeSelect, {
      target: { name: 'type', value: 'electronic' },
    });
    const submitBtn = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitBtn);

    await waitFor(() => expect(screen.getByText(/product stored/i)).toBeInTheDocument());

    expect(nameInput).toHaveValue('');
    expect(sizeInput).toHaveValue('');
    expect(typeSelect).toHaveValue('');
  });
});

describe('When the user submits the form and the server returns an unexpected error', () => {
  it('The form page must display the error message “Unexpected error, please try again”', async () => {
    const submitBtn = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitBtn);

    await waitFor(() =>
      expect(screen.getByText(/Unexpected error, please try again/i)).toBeInTheDocument()
    );
  });
});

describe('When the user submits the form and the server returns an inalid request error', () => {
  it('The form page must display the error message “The form is invalid, the fields [field1...fieldN] are required””', async () => {
    server.use(
      rest.post('/products', (req, res, ctx) => {
        return res(
          ctx.status(INVALID_REQUEST_STATUS),
          ctx.json({ message: 'The form is invalid, the fields name, size, type are required' })
        );
      })
    );

    const submitBtn = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitBtn);

    await waitFor(() =>
      expect(
        screen.getByText(/The form is invalid, the fields name, size, type are required/i)
      ).toBeInTheDocument()
    );
  });
});
