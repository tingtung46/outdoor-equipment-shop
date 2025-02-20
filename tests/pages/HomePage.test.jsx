import { it, expect, describe, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "../../src/pages/HomePage";
import hero from "../../src/images/heroImages/hero.png";
import { BrowserRouter } from "react-router-dom";

describe("Home Page", () => {
  beforeEach(() => {
    render(<HomePage />, { wrapper: BrowserRouter });
  });

  it("should render a list of image", () => {
    const images = screen.queryAllByRole("img");

    expect(images).toHaveLength(9);
    expect(images[0]).toHaveAttribute("src", hero);
  });

  it("should render hero text", () => {
    const heading = screen.getByText(/ready for adventure?/i);
    const paragraph = screen.getByText(/create lifetime/i);

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  it("should render one of paragraph of category", () => {
    const paragraph = screen.getByText(/footwear/i);
    expect(paragraph).toBeInTheDocument();
  });

  it("should render one of text of reason to buy", () => {
    const heading = screen.getByText(/store pickup/i);
    const paragraph = screen.getByText(/many items ready/i);

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});
