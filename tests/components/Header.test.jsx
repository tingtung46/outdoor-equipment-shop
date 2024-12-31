import Header from '../../src/components/Header'
import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('should render a logo on top left header', () => {
    render(<Header />)

    const logoImage = screen.getByRole('img');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/src/images/logo/navbar-logo.png')
  })

  it('should render a button', () => {
    render(<Header />)

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  })

  it('should render a list in navbar', () => {
    render(<Header />)

    const nav = screen.getByRole('navigation')
    const list = screen.getByRole('list');
    const homeLink = screen.getByText('Home');
    const shopLink = screen.getByText('Shop');
    const aboutLink = screen.getByText('About Us');

    expect(nav).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();

    expect(nav).toContainElement(list);
    expect(list).toContainElement(homeLink);
    expect(list).toContainElement(shopLink);
    expect(list).toContainElement(aboutLink);
  })
})