// src/BookDetails.js
import React from 'react';

const BookDetails = () => {
  const books = [
    { title: 'Master React', pages: 670 },
    { title: 'Deep Dive Into Angular 11', pages: 800 },
    { title: 'Mongo Essentials', pages: 450 },
  ];

  return (
    <div style={{ padding: '20px 30px', borderRight: '3px solid green', width: '33%' }}>
      <h2 style={{ marginBottom: '20px' }}>Book Details</h2>
      {books.map((book, index) => (
        <div key={index} style={{ marginBottom: '6.5px' }}>
          <p style={{ fontWeight: 'bold', margin: '0',padding:'0.1px 40px ' }}>{book.title}</p>
          <p style={{ fontWeight: 'bold',margin: '0',padding:'20px 40px 20px' }}>{book.pages}</p>
        </div>
      ))}
    </div>
  );
};

export default BookDetails;