import { it, expect, describe, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../../src/components/Footer";
import { BrowserRouter } from "react-router-dom";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />, { wrapper: BrowserRouter });
  });

  it("should render copyright description", () => {
    expect(screen.getByText(/copyright 2025 alpinus/i)).toBeInTheDocument();
  });

  it("should have attribute", () => {
    expect(screen.getByText("Tingtung").closest("a")).toHaveAttribute(
      "href",
      "https://github.com/tingtung46"
    );
  });
});
