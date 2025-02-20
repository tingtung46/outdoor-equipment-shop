import Header from "../../src/components/Header";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const renderHeader = (props = {}) => {
  const defaultProps = { shoppingCart: [] };

  return render(<Header {...defaultProps} {...props} />, {
    wrapper: BrowserRouter,
  });
};

describe("Header", () => {
  it("should render a logo on top left header", () => {
    renderHeader();

    const logoImage = screen.getByRole("img");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute(
      "src",
      "/src/images/logo/navbar-logo.png"
    );
  });

  it("should render a list in navbar", () => {
    renderHeader();

    const nav = screen.getByRole("navigation");
    const list = screen.getByRole("list");
    const homeLink = screen.getByText("Home").closest("a");
    const shopLink = screen.getByText("Shop").closest("a");
    const aboutLink = screen.getByText("About Us").closest("a");

    expect(nav).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
    expect(shopLink).toHaveAttribute("href", "/shop-page/all");
    expect(aboutLink).toHaveAttribute("href", "/about");

    expect(nav).toContainElement(list);
    expect(list).toContainElement(homeLink);
    expect(list).toContainElement(shopLink);
    expect(list).toContainElement(aboutLink);
  });
});
