import data from '../data/catalog.json';

export const getData = (category) => {
  if (category === 'all') {
    return data;
  }

  const filteredCategory = data.filter((product) => product.Type === category);

  return filteredCategory;
};
