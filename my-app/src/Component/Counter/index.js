import React from 'react';
import Counter from './Counter';
import AddCounter from './AddCounter';

const CounterIndex = () => {
  return (
    <div className="App">
      <h1>Multi-Counter App</h1>
      <AddCounter />
      <Counter />
    </div>
  );
};

export default CounterIndex;
