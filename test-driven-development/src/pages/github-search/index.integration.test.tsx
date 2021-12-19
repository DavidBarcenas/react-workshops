import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { OK_STATUS } from '../../consts/httpStatus';
import { makeFakeRepo, makeFakeResponse } from '../../__fixtures__/repos';
import { handlerPaginated } from '../../__fixtures__/handler';
import GithubSearchPage from '.';

const server = setupServer(
  rest.get('/search/repositories', (req, res, ctx) => {
    return res(
      ctx.status(OK_STATUS),
      ctx.json(makeFakeResponse(100, [makeFakeRepo()])),
    );
  }),
);

beforeAll(() => server.listen());

beforeEach(() => render(<GithubSearchPage />));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());

const fireClickSearch = () =>
  fireEvent.click(screen.getByRole('button', { name: /search/i }));

describe('when the option to display the rows is selected', () => {
  it('it should do a new search and show 25 and 50 rows of results in the table', async () => {
    server.use(rest.get('/search/repositories', handlerPaginated));

    fireClickSearch();

    expect(await screen.findByRole('table')).toBeInTheDocument();
    expect(await screen.findAllByRole('row')).toHaveLength(11);

    fireEvent.mouseDown(screen.getByLabelText(/rows per page/i));
    fireEvent.click(screen.getByRole('option', { name: '25' }));

    await waitFor(() =>
      expect(
        screen.getByRole('button', { name: /search/i }),
      ).not.toBeDisabled(),
    );
    expect(await screen.findAllByRole('row')).toHaveLength(26);

    fireEvent.mouseDown(screen.getByLabelText(/rows per page/i));
    fireEvent.click(screen.getByRole('option', { name: '50' }));

    await waitFor(() =>
      expect(
        screen.getByRole('button', { name: /search/i }),
      ).not.toBeDisabled(),
    );

    expect(await screen.findAllByRole('row')).toHaveLength(51);
  });
});

describe('change results page with the arrow buttons', () => {
  it('should show next page of repositories', async () => {
    server.use(rest.get('/search/repositories', handlerPaginated));

    fireClickSearch();

    expect(await screen.findByRole('table')).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: /1-2/ })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /next page/i }),
    ).not.toBeDisabled();

    fireEvent.click(screen.getByRole('button', { name: /next page/i }));

    expect(screen.getByRole('button', { name: /search/i })).toBeDisabled();

    await waitFor(() =>
      expect(
        screen.getByRole('button', { name: /search/i }),
      ).not.toBeDisabled(),
    );

    expect(screen.getByRole('cell', { name: /2-2/ })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /previous page/i }));

    await waitFor(() =>
      expect(
        screen.getByRole('button', { name: /search/i }),
      ).not.toBeDisabled(),
    );

    expect(screen.getByRole('cell', { name: /1-2/ })).toBeInTheDocument();
  });
});

describe('start from 0 when change selection of records per page', () => {
  it('must display the results of the first page', async () => {
    server.use(rest.get('/search/repositories', handlerPaginated));

    fireClickSearch();

    expect(await screen.findByRole('table')).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: /1-2/ })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /next page/i }),
    ).not.toBeDisabled();

    fireEvent.click(screen.getByRole('button', { name: /next page/i }));

    expect(screen.getByRole('button', { name: /search/i })).toBeDisabled();

    await waitFor(() =>
      expect(
        screen.getByRole('button', { name: /search/i }),
      ).not.toBeDisabled(),
    );

    expect(screen.getByRole('cell', { name: /2-2/ })).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByLabelText(/rows per page/i));
    fireEvent.click(screen.getByRole('option', { name: '25' }));

    await waitFor(() =>
      expect(
        screen.getByRole('button', { name: /search/i }),
      ).not.toBeDisabled(),
    );

    expect(screen.getByRole('cell', { name: /1-2/ })).toBeInTheDocument();
  });
});
