import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, removeCounter } from '../../Redux/action';

const Counter = () => {
  const counters = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <h2>Counter List</h2>
      {counters.length === 0 && <p>No counters available. Add one!</p>}
      <ul>
        {counters.map((counter) => (
          <li key={counter.id}>
            <p>Value: {counter.value}</p>
            <button onClick={() => dispatch(increment(counter.id))}>
              Increment
            </button>
            <button onClick={() => dispatch(decrement(counter.id))}>
              Decrement
            </button>
            <button onClick={() => dispatch(reset(counter.id))}>Reset</button>
            <button onClick={() => dispatch(removeCounter(counter.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Counter;
