import React from 'react';
import Controller from './Controller';
import { useContext } from 'react';
import { CountContext } from './countContext/CountContext';
import { useEffect } from 'react';

const Counter = () => {
  const { count, decrement, increment, reset } = useContext(CountContext)
  useEffect(() => {
    document.title = count
    console.log('dad');
    
  })
  return (
    <div>
      <div className="card card-body text-center my-3">
        <h3>Count = {count}</h3>
      </div>

      <div className="card card-body text-center">
        <Controller
          decrement={decrement}
          reset={reset}
          increment={increment} />
      </div>
    </div>
  );
};

export default Counter;