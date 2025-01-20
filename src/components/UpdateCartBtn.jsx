const UpdateCartBtn = ({ updateProduct, removeProduct, setIsAdded, item, quantity }) => {
  return (
    <div>
      <button type="button" onClick={() => { updateProduct(item.Id, quantity) }}>
        Update product
      </button>

      <button
        type="button"
        onClick={() => {
          removeProduct(item);
          setIsAdded(false);
        }}
      >
        Remove product
      </button>
    </div>
  );
};

export default UpdateCartBtn;
