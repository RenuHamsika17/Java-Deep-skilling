//import logo from './logo.svg';
import React from 'react';
import './App.css';
import officeLobbyImage from './office_lobby.jpeg'; // <-- Updated import

const office = {
  name: "DBS",
  rent: 50000,
  address: "Chennai"
};

function App() {
  const rentStyle = {
    color: office.rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold'
    
  };

  return (
    <div className="App" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Office Space, at Affordable Range</h1>
      
      {/* Updated src attribute to use the imported image variable */}
      <img 
        src={officeLobbyImage} 
        alt="Office Space Lobby"
        style={{ margin: '20px auto', display: 'block', maxWidth: '100%', height: 'auto' }}
      />
      
      <h3>Name: {office.name}</h3>
      <h3 style={rentStyle}>Rent: Rs. {office.rent}</h3>
      <h3>Address: {office.address}</h3>
    </div>
  );
}

export default App;