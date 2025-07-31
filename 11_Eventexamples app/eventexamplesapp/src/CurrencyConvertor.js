import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [inrAmount, setInrAmount] = useState('');
  const exchangeRate = 80; // Assuming 1 Euro = 80 INR based on the alert message (6400 / 80 = 80)

  // Event handler for input change
  const handleInrChange = (event) => {
    setInrAmount(event.target.value);
  };

  // Event handler for form submission, displays result in an alert
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const inr = parseFloat(inrAmount);
    if (!isNaN(inr)) {
      const euro = inr / exchangeRate;
      // Show the result in an alert box, matching the output image
      alert(`Converting to Euro Amount is ${euro.toFixed(0)}`);
    } else {
      alert('Please enter a valid number.');
    }
  };

  return (
    <div style={{ padding: '20px', margin: '20px 0' }}>
      <h2 style={{ color: 'green', fontSize: '2em' }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="inrInput" style={{ marginRight: '10px', display: 'block', textAlign: 'left', fontWeight: 'bold' }}>
            Amount:
          </label>
          <input
            type="number"
            id="inrInput"
            value={inrAmount}
            onChange={handleInrChange}
            style={{ padding: '8px', width: '200px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="currencyOutput" style={{ marginRight: '10px', display: 'block', textAlign: 'left', fontWeight: 'bold' }}>
            Currency:
          </label>
          <input
            type="text"
            id="currencyOutput"
            value="Euro"
            readOnly
            style={{ padding: '8px', width: '200px' }}
          />
        </div>
        <button 
          type="submit" 
          style={{ padding: '10px 20px', backgroundColor: '#eee', border: '1px solid #ccc', cursor: 'pointer' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CurrencyConvertor;