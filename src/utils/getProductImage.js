const getProductImage = (id) => {
  return new URL(`../images/productImages/${id}.webp`, import.meta.url).href;
};

export default getProductImage;
