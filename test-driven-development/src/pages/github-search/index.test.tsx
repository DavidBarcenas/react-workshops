import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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
  it('the search button should be disabled until the search is done', async () => {
    const submitBtn = screen.getByRole('button', { name: /search/i });

    expect(submitBtn).not.toBeDisabled();
    fireEvent.click(submitBtn);
    expect(submitBtn).toBeDisabled();

    await waitFor(() => expect(submitBtn).not.toBeDisabled());
  });

  it('the data should be displayed as a sticky table', async () => {
    const submitBtn = screen.getByRole('button', { name: /search/i });
    fireEvent.click(submitBtn);

    await waitFor(() =>
      expect(
        screen.queryByText(
          /please provide a search option and click in the search button/i,
        ),
      ).not.toBeInTheDocument(),
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
