import { render, screen } from '@testing-library/react';
import FormPage from '../../pages/Form';

describe('When form is mounted', () => {
  it('There must be a create product form page.', () => {
    render(<FormPage />);
    expect(
      screen.getByRole('heading', {
        name: /create product/i,
      })
    ).toBeInTheDocument();
  });
});
