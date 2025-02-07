import PropTypes from 'prop-types';

const UpdateCartBtn = ({ updateProduct, removeProduct, setIsAdded, item, quantity }) => {
  return (
    <div className="flex flex-row gap-5">
      <button
        type="button"
        onClick={() => {
          updateProduct(item.Id, quantity);
        }}
        className={`${quantity === 0 ? 'opacity-25 pointer-events-none' : ''}`}
      >
        Update product
      </button>

      <button
        type="button"
        onClick={() => {
          removeProduct(item);
          setIsAdded(false);
        }}
      >
        Remove product from cart
      </button>
    </div>
  );
};

export default UpdateCartBtn;

UpdateCartBtn.propTypes = {
  updateProduct: PropTypes.any || PropTypes.func,
  removeProduct: PropTypes.any || PropTypes.func,
  setIsAdded: PropTypes.any || PropTypes.func,
  item: PropTypes.object,
  quantity: PropTypes.number,
};
