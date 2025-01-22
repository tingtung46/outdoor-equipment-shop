const OrderSummary = ({ subTotal }) => {
  return (
    <section>
      <h3>Order Summary</h3>

      <div>
        <div>
          <p>Sub total</p>
          <p>{'\u0024'}{subTotal}</p>
        </div>

        <div>
          <p>Standard shipping</p>
          <p>FREE</p>
        </div>

        <div>
          <p>Estimated taxes</p>
          <p>--</p>
        </div>
      </div>

      <div>
        <p>Order Total</p>
        <p>{'\u0024'}{subTotal}</p>
      </div>
    </section>
  );
};

export default OrderSummary;
