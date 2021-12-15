import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import GithubSearchPage from '.';

beforeEach(() => render(<GithubSearchPage />));

describe('render GithubSearchPage', () => {
  it('must display the title', () => {
    expect(
      screen.getByRole('heading', { name: /github repositories list/i }),
    ).toBeInTheDocument();
  });

  it('must be an input text with label "filter by" field', () => {
    expect(screen.getByLabelText(/filter by/i)).toBeInTheDocument();
  });

  it('there should be a search button', () => {
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('should show initial search status message', () => {
    expect(
      screen.getByText(
        /please provide a search option and click in the search button/i,
      ),
    ).toBeInTheDocument();
  });
});

describe('when a search is performed', () => {
  const fireClickSearch = () =>
    fireEvent.click(screen.getByRole('button', { name: /search/i }));

  it('the search button should be disabled until the search is done', async () => {
    const submitBtn = screen.getByRole('button', { name: /search/i });

    expect(submitBtn).not.toBeDisabled();
    fireClickSearch();
    expect(submitBtn).toBeDisabled();

    await waitFor(() => expect(submitBtn).not.toBeDisabled());
  });

  it('the data should be displayed as a sticky table', async () => {
    fireClickSearch();

    await waitFor(() =>
      expect(
        screen.queryByText(
          /please provide a search option and click in the search button/i,
        ),
      ).not.toBeInTheDocument(),
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('the table headers must contain: repository, stars, forks, open issues and updated at', async () => {
    fireClickSearch();

    const table = await screen.findByRole('table');
    const tableHeaders = within(table).getAllByRole('columnheader');

    expect(tableHeaders).toHaveLength(5);

    const [repository, stars, forks, openIssues, updatedAt] = tableHeaders;

    expect(repository).toHaveTextContent(/repository/i);
    expect(stars).toHaveTextContent(/stars/i);
    expect(forks).toHaveTextContent(/forks/i);
    expect(openIssues).toHaveTextContent(/open issues/i);
    expect(updatedAt).toHaveTextContent(/updated at/i);
  });

  it(`each table result should have: owner avatar image, name, stars, updated at, forks, open issues,
      column repository should have a link that opens in a new tab the github repository selected`, async () => {
    fireClickSearch();

    const table = await screen.findByRole('table');
    const tableCell = within(table).getAllByRole('cell');
    const [repository, stars, forks, openIssues, updatedAt] = tableCell;

    expect(within(repository).getByRole('img', { name: /test/i }));
    expect(tableCell).toHaveLength(5);
    expect(repository).toHaveTextContent(/test/i);
    expect(stars).toHaveTextContent(/5/i);
    expect(forks).toHaveTextContent(/1/i);
    expect(openIssues).toHaveTextContent(/0/i);
    expect(updatedAt).toHaveTextContent(/12-12-2021/i);

    expect(within(repository).getByText(/test/i).closest('a')).toHaveAttribute(
      'href',
      'http://localhost:3000/test',
    );
  });

  it('show the total number of search results and the current number of results [1-10 of 100]', async () => {
    fireClickSearch();

    await screen.findByRole('table');
    expect(screen.getByText(/1–10 of 100/i)).toBeInTheDocument();
  });

  it('results size per page select/combobox with the options: 10, 25, 50. The default is 10.', async () => {
    fireClickSearch();

    await screen.findByRole('table');
    expect(screen.getByLabelText(/rows per page/i)).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByLabelText(/rows per page/i));

    const listbox = screen.getByRole('listbox', { name: /rows per page/i });
    const options = within(listbox).getAllByRole('option');
    const [firstOpt, secondOpt, thirdOption] = options;

    expect(options).toHaveLength(3);
    expect(firstOpt).toHaveTextContent(/10/);
    expect(secondOpt).toHaveTextContent(/25/);
    expect(thirdOption).toHaveTextContent(/50/);
  });
});
