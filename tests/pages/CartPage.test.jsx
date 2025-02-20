import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CartPage from "../../src/pages/CartPage";
import { getProductImage } from "../../src/utils/getImage";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockUpdateProduct = vi.fn();
const mockRemoveProduct = vi.fn();

const product = [
  {
    Id: 15,
    Type: "Jackets",
    Brand: "Raptor Elite",
    Name: "Summit Pro Insulated Jacket",
    Description:
      "The Summit Pro Insulated Jacket by Raptor Elite is designed to keep you warm and dry in extreme conditions. With its waterproof and breathable construction, heat-sealed seams, and insulation made from recycled materials, this jacket is both eco-friendly and high-performance. Available in vibrant red, it also features a removable hood and plenty of storage pockets.",
    Price: 249.99,
    quantity: 2,
  },
];

const image = getProductImage(product[0]["Id"]);

describe("Cart Page", () => {
  const renderCartPage = (cartElements = []) => {
    render(
      <CartPage
        shoppingCart={cartElements}
        updateProduct={mockUpdateProduct}
        removeProduct={mockRemoveProduct}
      />,
      { wrapper: BrowserRouter }
    );
  };

  it("should render item image", () => {
    renderCartPage(product);

    const img = screen.getByRole("img");

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", image);
  });

  it("should render item description", () => {
    renderCartPage(product);

    const brand = screen.getByText(/raptor elite/i);
    const name = screen.getByText(/Summit Pro Insulated Jacket/i);
    const price = screen.getByText(/249.99/i);

    expect(brand).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it("should render quantity input value", () => {
    renderCartPage(product);

    const input = screen.getByLabelText("quantity");

    expect(input).toBeInTheDocument();
    expect(input.value).toBe("2");
  });

  it("should render order summary", () => {
    renderCartPage(product);

    const heading = screen.getByText(/order summary/i);
    const subTotal = screen.getByText(/sub total/i);
    const orderTotal = screen.getByText(/order total/i);

    expect(heading).toBeInTheDocument();
    expect(subTotal).toBeInTheDocument();
    expect(orderTotal).toBeInTheDocument();
  });

  it("should render check out button", () => {
    renderCartPage(product);

    const button = screen.getByRole("button", {
      name: /proceed to checkout/i,
    });

    expect(button).toBeInTheDocument();
  });

  it("should render element when the cart is empty", () => {
    renderCartPage();

    expect(screen.getByText(/empty/i)).toBeInTheDocument();
  });

  it("should call remove product function when remove product button is clicked", async () => {
    const user = userEvent.setup();
    renderCartPage(product);

    const removeBtn = screen.getByTitle("Remove");
    expect(removeBtn).toBeInTheDocument();

    await user.click(removeBtn);
    expect(mockRemoveProduct).toBeCalledTimes(1);
  });

  it("should call increase or decrease quantity function when increase or decrease quantity button is clicked", async () => {
    const user = userEvent.setup();
    renderCartPage(product);

    const increaseBtn = screen.getByTitle("Increase");
    const decreaseBtn = screen.getByTitle("Decrease");
    expect(increaseBtn).toBeInTheDocument();
    expect(decreaseBtn).toBeInTheDocument();

    await user.click(increaseBtn);
    await user.click(decreaseBtn);
    expect(mockUpdateProduct).toBeCalledTimes(2);
  });
});
