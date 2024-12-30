import classNames from 'classnames';
import { useState } from 'react';

const GetProductButton = () => {
  const [getItem, setGetItem] = useState('');

  return (
    <>
      <section>
        <button
          type="button"
          className={classNames({ pickUp: getItem === 'pickUp' })}
          onClick={() => setGetItem('pickUp')}
        >
          <div>
            <div>
              <p>Pick up</p>
              <p>Tomorrow after 2pm</p>
            </div>

            <p>FREE & FAST</p>
          </div>
        </button>

        <button
          type="button"
          className={classNames({ pickUp: getItem === 'ship' })}
          onClick={() => setGetItem('ship')}
        >
          <div>
            <p>Ship to address</p>
            <p>Ship it to your address</p>
          </div>
        </button>
      </section>
    </>
  );
};

export default GetProductButton;
