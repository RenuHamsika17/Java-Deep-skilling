import React, { useState } from 'react';
import './App.css'; 
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(1);
  const [welcomeMessage, setWelcomeMessage] = useState(''); // Now used
  const [clickedMessage, setClickedMessage] = useState(''); // Now used

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const sayHello = () => {
    console.log("Hello from multiple methods!");
  };

  const handleIncrementMultiple = () => {
    incrementCounter(); 
    sayHello();         
  };

  const decrementCounter = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  const sayMessage = (message) => {
    setWelcomeMessage(`You said: "${message}"`);
  };

  const handleSyntheticClick = () => {
    setClickedMessage("I was clicked!");
  };

  return (
    <div className="App" style={{ padding: '20px', display: 'flex', gap: '50px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <p style={{ margin: 0, fontSize: '2em' }}>{counter}</p>
        <button onClick={handleIncrementMultiple}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={() => sayMessage("welcome")}>Say welcome</button>
        {/* Display the welcome message when it exists */}
        {welcomeMessage && <p>{welcomeMessage}</p>}
        
        <button onClick={handleSyntheticClick}>Click on me</button>
        {/* Display the clicked message when it exists */}
        {clickedMessage && <p>{clickedMessage}</p>}
      </div>

      <div>
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;