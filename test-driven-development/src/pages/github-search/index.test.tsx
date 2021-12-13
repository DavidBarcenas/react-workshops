import {render, screen} from '@testing-library/react'
import GithubSearchPage from '.'

describe('Render GithubSearchPage', () => {
  beforeEach(() => render(<GithubSearchPage />))

  it('Must display the title', () => {
    expect(screen.getByRole('heading', {
      name: /github repositories list/i
    })).toBeInTheDocument()
  })

  it('Must be an input text with label "filter by" field', () => {
    expect(screen.getByLabelText(/filter by/i)).toBeInTheDocument()
  })
})