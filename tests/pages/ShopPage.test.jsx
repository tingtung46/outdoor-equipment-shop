import { it, expect, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ShopPage from '../../src/pages/ShopPage';

describe('Shop Page', () => {
  beforeEach(() => {
    render(<ShopPage />);
  });

  it('should render filter heading and variant', () => {
    const heading = screen.getByText(/filter/i);
    const type = screen.getByText(/type/i);
    const brand = screen.getByText(/brand/i);

    expect(heading).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(brand).toBeInTheDocument();
  });

  it('should render one of product from all category', () => {
    const title = screen.getByText(/Summit Pro Harness/i);
    const price = screen.getByText(/89.99/i);

    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it('should render all buttons', () => {
    const button = screen.getAllByRole('button');

    expect(button).toHaveLength(29);
  });
});
