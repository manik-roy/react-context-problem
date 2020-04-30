import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CountContextProvider from './components/countContext/CountContext';
import MousePosition from './components/MousePosition';
function App() {

  return (
    <CountContextProvider>
      <div className="container">
        <Counter />
        <MousePosition/>
      </div>
    </CountContextProvider>
  );
}

export default App;
