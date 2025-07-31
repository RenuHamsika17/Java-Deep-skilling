// src/BlogDetails.js
import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { title: 'React Learning', author: 'Stephen Biz', snippet: 'Welcome to learning React!' },
    { title: 'Installation', author: 'Schewzdenier', snippet: 'You can install React from npm.' },
  ];

  return (
    <div style={{ padding: '20px 30px', width: '33%' }}>
      <h2 style={{ marginBottom: '20px' }}>Blog Details</h2>
      {blogs.map((blog, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p style={{ fontWeight: 'bold', margin: '0' }}>{blog.title}</p>
          <p style={{ fontWeight: 'bold',margin: '0',padding:'20px 0px 20px' }}>{blog.author}</p>
          <p style={{ margin: '0' }}>{blog.snippet}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;