//import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const flag = false; // Toggle this between true/false

  return (
    <div className="App">
      
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;

