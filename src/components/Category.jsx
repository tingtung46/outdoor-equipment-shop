import { v4 as uuidv4 } from 'uuid';
import { type } from '../data/filterItem';
import { getCategoryImage } from '../utils/getImage';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <>
      <section>
        <h2>Category</h2>

        <div>
          {type.map((category) => {
            return (
              <div key={uuidv4()}>
                <Link to={`/shop-page/${category.param}`}>
                  <img src={getCategoryImage(category.id)} alt="Category" />
                  <p>{category.type}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Category;
