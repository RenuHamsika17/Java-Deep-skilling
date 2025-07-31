// src/GuestPage.js
import React from 'react';

const GuestPage = () => {
  const flightDetails = [
    { id: 1, flight: 'FL101', from: 'New York', to: 'London', time: '08:00 AM' },
    { id: 2, flight: 'FL202', from: 'London', to: 'Paris', time: '10:30 AM' },
    { id: 3, flight: 'FL303', from: 'Tokyo', to: 'Sydney', time: '03:00 PM' },
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Welcome Guest! Browse Our Flights</h2>
      <p>Please sign up or log in to book tickets.</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        {flightDetails.map(flight => (
          <div key={flight.id} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            padding: '15px', 
            width: '80%', 
            maxWidth: '500px', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'left'
          }}>
            <p><strong>Flight:</strong> {flight.flight}</p>
            <p><strong>Route:</strong> {flight.from} to {flight.to}</p>
            <p><strong>Departure:</strong> {flight.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestPage;