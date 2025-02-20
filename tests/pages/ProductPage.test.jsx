import { it, expect, describe, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductPage from "../../src/pages/ProductPage";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const mockAddProduct = vi.fn();
const mockUpdateProduct = vi.fn();
const mockRemoveProduct = vi.fn();

describe("Product Page", () => {
  const renderProductPage = (cartElements = []) => {
    render(
      <MemoryRouter
        initialEntries={["/product/jackets/summit-pro-insulated-jacket"]}
      >
        <Routes>
          <Route
            path="/product/:category/:product"
            element={
              <ProductPage
                addProduct={mockAddProduct}
                removeProduct={mockRemoveProduct}
                updateProduct={mockUpdateProduct}
                shoppingCart={cartElements}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );
  };

  it("should render product image", () => {
    renderProductPage();
    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "Product");
  });

  it("should render product name, price and description", () => {
    renderProductPage();
    const name = screen.getAllByText(/Summit Pro Insulated Jacket/i);
    const price = screen.getByText(/249.99/i);
    const desc = screen.getByText(/is designed to keep you/i);

    expect(name).toHaveLength(2);
    expect(price).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });

  it("should render quantity input value", () => {
    renderProductPage();
    const input = screen.getByLabelText("quantity");

    fireEvent.change(input, { target: { value: "4" } });
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("4");
  });
});
