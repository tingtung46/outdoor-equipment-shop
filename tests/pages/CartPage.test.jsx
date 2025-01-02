import { it, expect, describe, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import CartPage from '../../src/pages/CartPage';
import { getProductImage } from '../../src/utils/getImage';

const prop = [
  {
    Id: 15,
    Type: 'Jackets',
    Brand: 'Raptor Elite',
    Name: 'Summit Pro Insulated Jacket',
    Description:
      'The Summit Pro Insulated Jacket by Raptor Elite is designed to keep you warm and dry in extreme conditions. With its waterproof and breathable construction, heat-sealed seams, and insulation made from recycled materials, this jacket is both eco-friendly and high-performance. Available in vibrant red, it also features a removable hood and plenty of storage pockets.',
    Price: 249.99,
    quantity: 2,
  },
];

const image = getProductImage(prop[0]['Id']);

describe('Cart Page', () => {
  beforeEach(() => {
    render(<CartPage shoppingCart={prop} />);
  });

  it('should render item image', () => {
    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', image);
  });

  it('should render item description', () => {
    const brand = screen.getByText(/raptor elite/i);
    const name = screen.getByText(/Summit Pro Insulated Jacket/i);
    const price = screen.getByText(/249.99/i);

    expect(brand).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it('should render quantity input value', () => {
    const input = screen.getByLabelText('quantity');

    fireEvent.change(input, { target: { value: '4' } });
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('4');
  });

  it('should render button of how to get item', () => {
    const pickUp = screen.getByText(/pick up/i);
    const ship = screen.getByText(/ship it to your address/i);

    expect(pickUp).toBeInTheDocument();
    expect(ship).toBeInTheDocument();
  });

  it('should render order summary', () => {
    const heading = screen.getByText(/order summary/i);
    const shipping = screen.getByText(/standard shipping/i);
    const orderTotal = screen.getByText(/order total/i);

    expect(heading).toBeInTheDocument();
    expect(shipping).toBeInTheDocument();
    expect(orderTotal).toBeInTheDocument();
  });

  it('should render check out button', () => {
    const button = screen.getByRole('button', { name: /check out/i });

    expect(button).toBeInTheDocument();
  });
});
