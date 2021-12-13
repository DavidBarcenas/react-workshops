import {render, screen} from '@testing-library/react'
import GithubSearchPage from '.'

describe('Render GithubSearchPage', () => {
  it('Must display the title', () => {
    render(<GithubSearchPage />)
    expect(screen.getByRole('heading', {
      name: /github repositories list/i
    })).toBeInTheDocument()
  })
})