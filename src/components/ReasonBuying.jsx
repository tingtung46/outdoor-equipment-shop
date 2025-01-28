const ReasonBuying = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center mb-5">
        <h2 className="font-semibold text-2xl/8 my-5">Why shop at Alpinus</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 md:mx-2 grid-rows-1 gap-10 justify-around">
          <div className="border-2 border-neutral-400 rounded-lg p-4">
            <h3 className="font-semibold text-xl mb-7">Store pickup</h3>
            <p>Many items ready same day</p>
          </div>

          <div className="border-2 border-neutral-400 rounded-lg p-4">
            <h3 className="font-semibold text-xl mb-7">Easy returns</h3>
            <p>Shop with confidence</p>
          </div>

          <div className="border-2 border-neutral-400 rounded-lg p-4">
            <h3 className="font-semibold text-xl mb-7">Free Shipping</h3>
            <p>On most items</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReasonBuying;
