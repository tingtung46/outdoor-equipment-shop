export const Card = ({ img, title, price }) => {
  return (
    <>
      <div className="flex flex-col items-center w-14 h-16">
        <img src={img} alt="Product" className="w-full h-full rounded-md" />

        <div className="flex justify-between">
          <p>{title}</p>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
};
