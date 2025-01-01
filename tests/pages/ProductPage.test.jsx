import { it, expect, describe, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import ProductPage from '../../src/pages/ProductPage';
import { getProductImage } from '../../src/utils/getImage';

const props = {
  Id: 15,
  Type: 'Jackets',
  Brand: 'Raptor Elite',
  Name: 'Summit Pro Insulated Jacket',
  Description:
    'The Summit Pro Insulated Jacket by Raptor Elite is designed to keep you warm and dry in extreme conditions. With its waterproof and breathable construction, heat-sealed seams, and insulation made from recycled materials, this jacket is both eco-friendly and high-performance. Available in vibrant red, it also features a removable hood and plenty of storage pockets.',
  Price: 249.99,
};

const productImg = getProductImage(props.Id);

describe('Product Page', () => {
  beforeEach(() => {
    render(<ProductPage product={props} />);
  });

  it('should render product image', () => {
    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', productImg);
    expect(image).toHaveAttribute('alt', 'Product');
  });

  it('should render product name, price and description', () => {
    const name = screen.getAllByText(/Summit Pro Insulated Jacket/i);
    const price = screen.getByText(/249.99/i);
    const desc = screen.getByText(/is designed to keep you/i);

    expect(name).toHaveLength(2);
    expect(price).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });

  it('should render quantity input value', () => {
    const input = screen.getByLabelText('quantity');

    fireEvent.change(input, { target: { value: '4' } });
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('4');
  });
});
