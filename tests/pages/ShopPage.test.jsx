import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ShopPage from "../../src/pages/ShopPage";
import ProductDisplay from "../../src/components/ProductDisplay";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Shop Page", () => {
  const renderShopPage = () => {
    render(
      <MemoryRouter initialEntries={["/shop-page/all"]}>
        <Routes>
          <Route path="/shop-page" element={<ShopPage />}>
            <Route path=":category" element={<ProductDisplay />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  };

  it("should render filter heading and variant", () => {
    renderShopPage();

    const category = screen.getByText(/category/i);
    const brand = screen.getByText(/brand/i);

    expect(category).toBeInTheDocument();
    expect(brand).toBeInTheDocument();
  });

  it("should render one of product from all category", () => {
    renderShopPage();

    const title = screen.getByText(/Summit Pro Harness/i);
    const price = screen.getByText(/89.99/i);

    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
