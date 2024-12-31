export const getProductImage = (id) => {
  return new URL(`../images/productImages/${id}.webp`, import.meta.url).href;
};

export const getCategoryImage = (id) => {
  return new URL(`../images/categoryImages/${id}.webp`, import.meta.url).href;
};
