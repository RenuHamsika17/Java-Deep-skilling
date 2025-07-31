// src/CourseDetails.js
import React from 'react';

const CourseDetails = () => {
  const courses = [
    { name: 'Angular', date: '4/5/2021' },
    { name: 'React', date: '6/3/2020' },
  ];

  return (
    <div style={{ padding: '20px', borderRight: '3px solid green', width: '33%' }}>
      <h2 style={{ marginBottom: '20px' }}>Course Details</h2>
      {courses.map((course, index) => (
        <div key={index} style={{ marginBottom: '55px' }}>
          <p style={{ fontWeight: 'bold', margin: '0' }}>{course.name}</p>
          <p style={{ fontWeight: 'bold', margin: '0',padding:'20px 0px 20px',textAlign:'left'}}>{course.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;