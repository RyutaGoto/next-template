import { render, screen } from '@testing-library/react';
import { Button } from '.';
import '@testing-library/jest-dom';

describe('Button', () => {
  test('renders a Button', () => {
    const { getByRole } = render(<Button />);
    expect(getByRole('button')).toBeInTheDocument();
  });
});
