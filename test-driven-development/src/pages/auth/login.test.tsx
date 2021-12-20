import {render, screen} from "@testing-library/react";
import LoginPage from "./login";

describe('login page is mounted', () => {
  it('must display the login title', () => {
    render(<LoginPage />)
    expect(screen.getByText(/login page/i)).toBeInTheDocument()
  })
})