import { render, screen } from '@testing-library/react';
import FormPage from '.';

describe('There must be a create product form page', () => {
  render(<FormPage />);

  test('Should render the title.', () => {
    expect(
      screen.getByRole('heading', { name: /create product/i }),
    ).toBeInTheDocument();
  });
});
