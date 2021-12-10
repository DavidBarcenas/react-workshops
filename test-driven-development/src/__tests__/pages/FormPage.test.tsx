import { render, screen } from '@testing-library/react';
import FormPage from '../../pages/Form';

describe('', () => {
  render(<FormPage />);
  test('There must be a create product form page.', () => {
    expect(screen.getByRole('heading', { name: /create product/i })).toBeInTheDocument();
  });
});
