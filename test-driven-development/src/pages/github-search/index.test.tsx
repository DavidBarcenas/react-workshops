import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import GithubSearchPage from '.';

beforeEach(() => render(<GithubSearchPage />));

describe('Render GithubSearchPage', () => {
  it('Must display the title', () => {
    expect(
      screen.getByRole('heading', { name: /github repositories list/i }),
    ).toBeInTheDocument();
  });

  it('Must be an input text with label "filter by" field', () => {
    expect(screen.getByLabelText(/filter by/i)).toBeInTheDocument();
  });

  it('There should be a search button', () => {
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('Should show initial search status message', () => {
    expect(
      screen.getByText(
        /please provide a search option and click in the search button/i,
      ),
    ).toBeInTheDocument();
  });
});

describe('When a search is performed', () => {
  it('The search button should be disabled until the search is done', async () => {
    const submitBtn = screen.getByRole('button', { name: /search/i });

    expect(submitBtn).not.toBeDisabled();
    fireEvent.click(submitBtn);
    expect(submitBtn).toBeDisabled();

    await waitFor(() => expect(submitBtn).not.toBeDisabled());
  });
});
