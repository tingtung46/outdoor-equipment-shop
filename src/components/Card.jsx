import PropTypes from "prop-types";

const Card = ({ img, title, price }) => {
  return (
    <>
      <div className="w-25 h-27">
        <img src={img} alt="Product" className="w-full h-full rounded-md" />

        <div className="flex justify-between">
          <p>{title}</p>
          <p>{'\u0024'}{price}</p>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
}

export default Card;
