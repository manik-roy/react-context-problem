import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export let CountContext = createContext()

const CountContextProvider = props => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(previousValue => previousValue + 1)
  }
  const decrement = () => {
    setCount(previousValue => previousValue - 1)
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <CountContext.Provider value={{ count, increment, decrement, reset }}>
      {props.children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;