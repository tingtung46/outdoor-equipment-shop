export const filteredCollected = (filterProp) => {
  const collectedTrueKeys = {
    Type: [],
    Brand: [],
  };
  const { Type, Brand } = filterProp.passingTags;

  for (let typeKey in Type) {
    if (Type[typeKey]) collectedTrueKeys.Type.push(typeKey);
  }

  for (let brandKey in Brand) {
    if (Brand[brandKey]) collectedTrueKeys.Brand.push(brandKey);
  }

  return collectedTrueKeys;
};

export const multiPropsFilter = (products, filters) => {
  const filterKeys = Object.keys(filters);

  const filteredProduct = products.filter((product) => {
    return filterKeys.every((key) => {
      if (!filters[key].length) return true;
      if (!filters[key].includes(product[key])) return true;

      return filters[key].includes(product[key]);
    });
  });

  return !filteredProduct ? null : filteredProduct;
};
