import { v4 as uuidv4 } from "uuid";
import { type } from '../data/filterItem';
import { getCategoryImage } from "../utils/getImage";

const Category = () => {
  return (
    <>
      <section>
        <h2>Category</h2>

        <div>
          {type.map((category) => {
            <div key={uuidv4()}>
              <img src={getCategoryImage(category.id)} alt="Category" />
              <p>{category.type}</p>
            </div>
          })}
        </div>
      </section>
    </>
  );
};

export default Category;
