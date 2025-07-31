// src/UserPage.js
import React from 'react';

const UserPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Welcome back!</h2>
      <p>You can now book your tickets.</p>
      {/* Placeholder for booking functionality */}
      <div style={{ 
        border: '1px solid #a2d2ff', 
        borderRadius: '8px', 
        padding: '20px', 
        margin: '20px auto', 
        maxWidth: '500px', 
        backgroundColor: '#e0f2ff' 
      }}>
        <h3>Book Your Flight</h3>
        <p>Booking form or details will go here...</p>
        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Proceed to Booking
        </button>
      </div>
    </div>
  );
};

export default UserPage;