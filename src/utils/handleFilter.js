import data from '../data/catalog.json';

const getBrandFilter = (category, brand) => {
  if (category === 'all') {
    return brand;
  }

  const gottenBrand = [];

  const products = data.filter((product) =>
    product.Param === category
  );

  const brands = products.map((product) => {
    return product.Brand
  });

  const filteredBrand = new Set(brands);
  const newFilteredBrand = [...filteredBrand];

  newFilteredBrand.forEach((newItem) => {
    const filteredItem = brand.filter((item) => item.brand === newItem);
    gottenBrand.push(filteredItem);
  });

  return gottenBrand.flat();
}

export default getBrandFilter;