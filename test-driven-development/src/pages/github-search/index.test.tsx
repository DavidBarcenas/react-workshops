import { render, screen } from '@testing-library/react';
import GithubSearchPage from '.';

describe('Render GithubSearchPage', () => {
  beforeEach(() => render(<GithubSearchPage />));

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
});
