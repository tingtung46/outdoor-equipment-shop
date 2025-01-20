import PropTypes from "prop-types";

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

UpdateCartBtn.propTypes = {
  updateProduct: PropTypes.any || PropTypes.func,
  removeProduct: PropTypes.any || PropTypes.func,
  setIsAdded: PropTypes.any || PropTypes.func,
  item: PropTypes.object,
  quantity: PropTypes.number,
}
