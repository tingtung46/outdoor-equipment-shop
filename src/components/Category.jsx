const Category = () => {
  const productCategory = [];

  return (
    <>
      <section>
        <h2>Category</h2>

        {productCategory.map((category) => {
          <div>
            <div>
              <img src="" alt="Category" />
              <p>{category}</p>
            </div>
          </div>;
        })}
      </section>
    </>
  );
};

export default Category;
