import React, { useState } from 'react'
import './App.css';


function App() {
  const [number, setNumber] = useState(0)

  function increment() {
    setNumber(number + 1)
  }

  function decrement() {
    setNumber(number - 1)
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increment}>Incrementrar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default App;
