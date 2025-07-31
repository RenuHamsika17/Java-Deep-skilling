// src/App.js
import React, { useState } from 'react';
import './App.css'; // For basic app styling
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  // State to track if the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Event handler for Login button click
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Event handler for Logout button click
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Conditional rendering using an element variable
  let pageContent;
  let button;

  if (isLoggedIn) {
    pageContent = <UserPage />;
    button = (
      <button 
        onClick={handleLogout} 
        style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '10px' }}
      >
        Logout
      </button>
    );
  } else {
    pageContent = <GuestPage />;
    button = (
      <button 
        onClick={handleLogin} 
        style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '10px' }}
      >
        Login
      </button>
    );
  }

  return (
    <div className="App" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ padding: '20px', borderBottom: '1px solid #eee', marginBottom: '20px' }}>
        <h1>Flight Booking App</h1>
        {button} {/* Render the appropriate button */}
      </header>
      <main>
        {pageContent} {/* Render the appropriate page content */}
      </main>
    </div>
  );
}

export default App;
