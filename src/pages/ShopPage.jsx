import Filter from '../components/Filter';
import ProductDisplay from '../components/ProductDisplay';
import { useState } from 'react';
import { filterState } from '../data/filterState';
import data from '../data/catalog.json';
import { filteredCollected, multiPropsFilter } from '../utils/handleFilter';

const ShopPage = () => {
  const [filterProps, setFilterProp] = useState(filterState);
  const [productData, setProductData] = useState(data);

  const allFilterClickListener = (e, filterProp) => {
    const name = e.target.dataset.name;
    setFilterProp((prevState) => ({
      passingTags: {
        ...prevState.passingTags,
        [filterProp]: {
          ...prevState.passingTags[filterProp],
          [name]: !prevState.passingTags[filterProp],
        },
      },
    }));
  };

  const tags = filteredCollected(filterProps);

  if (filterProps !== filterState) {
    const filteredData = multiPropsFilter(data, tags);
    setProductData(filteredData);
  }

  return (
    <>
      <section className="flex">
        <Filter handleFilter={allFilterClickListener} />
        <ProductDisplay data={productData} />
      </section>
    </>
  );
};

export default ShopPage;
