import { render, screen } from '@testing-library/react';
import AdminPage from './index';

describe('when the admin page is mounted', () => {
  render(<AdminPage />);

  it('must display the admin username', () => {
    expect(screen.getByText(/daveepro/i)).toBeInTheDocument();
  });
});
