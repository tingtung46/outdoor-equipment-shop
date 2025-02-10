const OrderSummary = ({ subTotal }) => {
  return (
    <section className="flex flex-col items-center my-12">
      <div className="w-[90%] lg:w-[83%]">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 bg-gray-200 px-2 py-3">
          Order Summary
        </h3>

        <div className="mb-5 px-2">
          <div className="flex justify-between">
            <p>Sub total</p>

            <p>
              {'\u0024'}
              {subTotal}
            </p>
          </div>

          <div className="flex justify-between">
            <p>Estimated taxes</p>

            <p>--</p>
          </div>
        </div>

        <div className="flex justify-between px-2">
          <p>Order Total</p>

          <p className="text-lg font-semibold">
            {'\u0024'}
            {subTotal}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
