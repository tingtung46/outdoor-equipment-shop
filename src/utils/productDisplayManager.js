import data from '../data/catalog.json'

export const getData = (category) => {
  if (category === 'all') {
    return data
  }

  data.filter((product) => {
    product.Type === category
  });

  return data;
}